import { GoIssueClosed, GoIssueOpened, GoLinkExternal } from "react-icons/go";
import "./Card.css";

export default function IssueCard({ issue }) {

  return (
    <div className="IssueCard">
      <h3>{issue?.title}</h3>
      {issue.body && <p>{issue.body}</p>}
      <div className="IssueCard__additional-info">
        <span>
          {issue && issue.author.login}
        </span>
        <span>
          {issue && issue.state.toUpperCase() === "OPEN" ? <GoIssueOpened /> : <GoIssueClosed />}
        </span>
        <span>
          <a target={"_blank"} href={issue.url}><GoLinkExternal/></a>
        </span>
      </div>
    </div>
  );
}
