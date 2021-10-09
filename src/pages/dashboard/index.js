import { useEffect, useState } from "react";
import UserList from "../../components/User/List/List";
import UserCard from "../../components/User/Card/Card";
import FollowersQ from "./graphql/FollowersQ";
import { useQuery } from "@apollo/client";
import "./dashboard.css";

// http://dontpad.com/alfa-aula-react-3

export default function PagesDashboard() {
  const [username] = useState(
    () => window.localStorage.getItem("github_username") || ""
  );

  const { data: followers, error } = useQuery(FollowersQ, {
    variables: {
      username,
    },
  });

  return (
    <div>
      <header className="PagesDashboard__topbar">{username}</header>
      {error ? (
        <div>Algo de errado</div>
      ) : (
        <section className="PagesDashboard__content">
          <UserList title="Followers">
            {followers?.user.followers.nodes.map((follower) => (
              <UserCard key={follower.id} user={follower} />
            ))}
          </UserList>
        </section>
      )}
    </div>
  );
}
