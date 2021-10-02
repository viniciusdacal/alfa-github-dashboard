import { useEffect } from "react";
import { useHistory, useLocation } from "react-router";

export default function PagesAuth() {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    window.localStorage.setItem("github_token", token);
    history.replace("/dashboard");
  }, [history, location.search]);

  return null;
}
