import SimpleBar from "simplebar-react";
import "./List.css";


export default function RepositoryList({ loading, children }) {  
  return (
    <div className="RepositoryList">
      <h3>
        Repositories
        {loading && <span>Loading...</span>}
      </h3>
      <SimpleBar style={{ maxHeight: 600 }}>
        <div className="RepositoryList__content">
          {children}          
        </div>
      </SimpleBar>
    </div>
  );
}
