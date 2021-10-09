import { BsBuilding, BsGeoAlt } from "react-icons/bs";
import "./Card.css";

export default function UserCard({ user, isSelected, onClick }) {
  return (
    <li
      onClick={onClick}
      className={`UserCard ${isSelected && "UserCard--selected"}`}
    >
      <div className="UserCard__main-info">
        <h3>{user.name}</h3> <span>{user.login}</span>
      </div>
      <span className="UserCard__headline">{user.bio}</span>

      <div className="UserCard__additional-info">
        {Boolean(user.company) && (
          <span>
            <BsBuilding /> {user.company}
          </span>
        )}
        {Boolean(user.location) && (
          <span>
            <BsGeoAlt /> {user.location}
          </span>
        )}
      </div>
    </li>
  );
}
