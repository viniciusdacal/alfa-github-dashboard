import { useState } from "react";
import UserList from "../../components/User/List/List";
import UserCard from "../../components/User/Card/Card";
import RepositoryCard from "../../components/Repository/Card/Card";
import RepositoryList from "../../components/Repository/List/List";
import IssueList from "../../components/Issue/List/Issue";
import FollowersQ from "./graphql/FollowersQ";
import FollowingQ from "./graphql/FollowingQ";
import RepositoryQ from "../../components/Repository/List/graphql/RepositoryQ";
import { useQuery } from "@apollo/client";
import "./dashboard.css";

export default function PagesDashboard() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [repoSelected, setRepoSelected] = useState(null);
  const [username] = useState(
    () => window.localStorage.getItem("github_username") || ""
  );

  const { data: followers, error: followerError, loading: followersLoading } = useQuery(FollowersQ, {
    variables: {
      username,
    },
  });

  const { data: following, error: followingError, loading: followingLoading } = useQuery(FollowingQ, {
    variables: {
      username,
    },
  });

  const { data: repository, error: repositoryError, loading: repositoryLoading } = useQuery(RepositoryQ, {
    variables: {
      username: selectedUser ?? username
    },
  });

  const error = followerError || followingError || repositoryError;

  return (
    <div>
      <header className="PagesDashboard__topbar">{username}</header>
      {error ? (
        <div>Algo de errado</div>
      ) : (
        <section className="PagesDashboard__content">
          <UserList title="Followers" loading={followersLoading}>
            {followers?.user.followers.nodes.map((follower) => (
              <UserCard
                key={follower.id}
                user={follower}
                isSelected={selectedUser === follower.login}
                setSelectedUser={setSelectedUser}
                onClick={() => setSelectedUser(follower.login)}
              />
            ))}
            
          </UserList>
          <UserList title="Following" loading={followingLoading}>
            {following?.user.following.nodes.map((following) => (
              <UserCard
                key={following.id}
                user={following}
                isSelected={selectedUser === following.login}
                onClick={() => setSelectedUser(following.login)}
              />
            ))}
          </UserList>
          <RepositoryList username={selectedUser} loading={repositoryLoading} >
            {repository?.repositoryOwner.repositories?.nodes.map((repo) => (
              <RepositoryCard 
                key={repository?.repositoryOwner.repositories.nodes?.name} 
                repo={repo} 
                isSelected={repoSelected === repo.name}
                onClick={() => setRepoSelected(repo.name)}
                />
            ))}
          </RepositoryList>
          <IssueList username={selectedUser} repository={repoSelected}/>
        </section>
      )}
    </div>
  );
}
