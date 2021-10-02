import "./List.css";

export default function UserList({ title, children }) {
  return (
    <div className="UserList">
      <h3>{title}</h3>
      <div className="UserList__content">{children}</div>
    </div>
  );
}
