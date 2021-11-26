import { GoStar, GoRepoForked } from "react-icons/go";
import "./Card.css";

export default function RepositoryCard({ repo, isSelected, onClick }) {

  return (
    <li
      onClick={onClick}
      className={`RepositoryCard ${isSelected && "RepositoryCard--selected"}`}
    >
      <div className="RepositoryCard__main-info">
        <h3>{repo?.name}</h3>
      </div>
      {/* <span className="RepositoryCard__headline">{"testeXYZ"}</span> */}
        
      <div className="RepositoryCard__additional-info">
        <span>
          <GoStar /> {repo?.stargazersCount || 0}
        </span>
        <span>
          <GoRepoForked /> {repo?.forkCount || 0}
        </span>
        {repo.primaryLanguage?.name && <span>{repo.primaryLanguage.name}</span>}
      </div>
    </li>
  );
}
