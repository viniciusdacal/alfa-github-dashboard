require("dotenv").config();
const axios = require("axios").default;
const express = require("express");
const NodeCache = require("node-cache");
const session = require("express-session");
const app = express();

const accessTokenCache = new NodeCache({ deleteOnExpire: true });

if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET) {
  throw new Error("CLIENT_ID and CLIENT_SECRET are required");
}

const API_PORT = process.env.API_PORT;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

const REDIRECT_URI = `http://localhost:${API_PORT}/oauth-callback`;

app.use(
  session({
    secret: Math.random().toString(36).substring(2),
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/github-authentication", (req, res) => {
  console.log("Redirecting user");
  const authUrl =
    "https://github.com/login/oauth/authorize" +
    `?client_id=${encodeURIComponent(CLIENT_ID)}` +
    `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
    `&login=${req.query.login}` +
    `&state=${req.query.login}`;

  res.redirect(authUrl);
});

app.get("/oauth-callback", async (req, res) => {
  if (req.query.code) {
    console.log("Received an authorization code", req.query.code);

    const token = await exchangeForTokens(req.sessionID, {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: REDIRECT_URI,
      code: req.query.code,
    });

    if (token.message) {
      res.write(`<p>Unable to retrieve contact! Error Message: WHAT</p>`);
      return null;
    }

    res.redirect(`http://localhost:3000/auth?token=${token}`);
  }
});

const exchangeForTokens = async (userId, body) => {
  try {
    const response = await axios({
      url: "https://github.com/login/oauth/access_token",
      data: body,
      headers: {
        Accept: "application/json",
      },
    });
    const json = response.data;
    console.log(json);

    accessTokenCache.set(userId, json.access_token, Math.round(3600 * 24));

    console.log("> Received an access token and refresh token");
    return json.access_token;
  } catch (e) {
    console.log(e);
    return e;
  }
};

app.listen(API_PORT, () =>
  console.log(`API running at http://localhost:${API_PORT}`)
);
