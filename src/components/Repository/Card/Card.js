import { GoStar, GoRepoForked } from "react-icons/go";
import "./Card.css";

export default function RepositoryCard({ repo }) {
  return (
    <div className="RepositoryCard">
      <h3>{repo.name}</h3>
      <div className="RepositoryCard__additional-info">
        <span>
          <GoStar /> {repo.stargazers_count || 0}
        </span>
        <span>
          <GoRepoForked /> {repo.forks_count || 0}
        </span>
        {repo.language && <span>{repo.language}</span>}
      </div>
    </div>
  );
}
