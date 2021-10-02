import { useEffect, useState } from "react";
import "./dashboard.css";

export default function PagesDashboard() {
  const [error, setError] = useState();
  const [followers, setFollowers] = useState([]);
  const [username] = useState(
    () => window.localStorage.getItem("github_username") || ""
  );

  useEffect(() => {
    const token = window.localStorage.getItem("github_token");
    fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        authorization: `bearer ${token}`,
      },
      body: JSON.stringify({
        query: `
          query Followers {
            user(login: "${username}") {
              id
              followers(first: 10) {
                totalCount
                pageInfo {
                  hasNextPage
                  endCursor
                }
                nodes {
                  id
                  name
                  login
                  bio
                  company
                  location
                }
              }
            }
          }
        `,
        variables: {},
      }),
    })
      .then((r) => r.json())
      .then((json) => {
        setFollowers(json.data.user.followers.nodes);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div>
      <header className="PagesDashboard__topbar">{username}</header>
      {error ? (
        <div>Algo de errado</div>
      ) : (
        <section className="PagesDashboard__content">
          Followers
          <ul>
            {followers.map((follower) => (
              <li key={follower.id}>
                <strong>{follower.name}</strong>
                <strong>{follower.login}</strong>
                <strong>{follower.bio}</strong>
                <strong>{follower.company}</strong>
                <strong>{follower.location}</strong>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
