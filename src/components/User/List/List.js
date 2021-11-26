import SimpleBar from "simplebar-react";
import "./List.css";

export default function UserList({ title, loading, children }) {

  
  return (
    <div className="UserList">
      <h3>
        {title}
        {loading && <span>Loading...</span>}
      </h3>
      <SimpleBar style={{ maxHeight: 600 }}>
        <div className="UserList__content">{children}</div>
      </SimpleBar>
    </div>
  );
}
