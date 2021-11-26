import { gql } from "@apollo/client";

const RepositoryQ = gql`
  query RepositoryOwner($username: String!) {
    repositoryOwner(login: $username) {
      id
      login
      repositories(last: 10) {
        totalCount
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          name
          forkCount
          stargazerCount
          primaryLanguage {
            name
          }
        }
      }
    }
  }
`;
export default RepositoryQ;
