import { useParams } from "react-router";

export default function PagesDashboard() {
  const params = useParams();
  console.log(params);
  return <div>DASHBOARD {params.username}</div>;
}
