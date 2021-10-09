import SimpleBar from "simplebar-react";
import "./List.css";

export default function UserList({ title, children }) {
  return (
    <div className="UserList">
      <h3>{title}</h3>
      <SimpleBar style={{ maxHeight: 500 }}>
        <div className="UserList__content">{children}</div>
      </SimpleBar>
    </div>
  );
}
