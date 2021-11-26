import { useState } from "react";
import SimpleBar from "simplebar-react";
import IssueCard from "../Card/Card";
import IsuueQ from "./graphql/IssueQ";
import { useQuery } from "@apollo/client";
import "./Issue.css";


export default function IssueList({ username, repository }) {
  const [loginDefault] = useState(() => window.localStorage.getItem("github_username") || "");

  const { data, error, loading } = useQuery(IsuueQ, {
    variables: {
      owner: username ?? loginDefault,
      repository: repository
    },
  });

  const qtdIssues = data?.repository.issues.totalCount || 0;

  return (
    <div className="IssueList">
      <h3>
        Issues
        {loading && <span>Loading...</span>}
      </h3>
      <SimpleBar style={{ maxHeight: 600 }}>
        <div className="IssueList__content">
          { (!error && qtdIssues <= 0) && <span>No issues found</span> }
          
          {error ? (
            <div>Algo de errado, não está certo!</div>
          ) : (
            data?.repository.issues?.nodes.map((issue) => (
              <IssueCard key={data?.repository.issues?.nodes?.title} issue={issue} />
            ))
          )}
          
        </div>
      </SimpleBar>
    </div>
  );
}
