import { useState } from "react";
import { useHistory } from "react-router";
import "./login.css";

// uncontrolled

export default function PagesLogin() {
  const history = useHistory();
  const [value, setValue] = useState(() =>
    window.localStorage.getItem("github_username")
  );

  function onSubmit(event) {
    event.preventDefault();

    window.localStorage.setItem("github_username", value);
    history.push("/dashboard");
  }

  return (
    <div className="PagesLogin">
      <form className="PagesLogin__form" onSubmit={onSubmit}>
        <div className="PagesLogin__form-control">
          <label htmlFor="username">Github username</label>
          <input
            className="PagesLogin__form-input"
            id="username"
            name="username"
            value={value}
            onChange={(ev) => setValue(ev.target.value)}
            type="text"
          />
        </div>
        <button type="submit" className="PagesLogin__submit-button">
          Acessar
        </button>
      </form>
    </div>
  );
}
