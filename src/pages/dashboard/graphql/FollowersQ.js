import { gql } from "@apollo/client";

const FollowersQ = gql`
  query Followers($username: String!) {
    user(login: $username) {
      id
      followers(first: 10) {
        totalCount
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          name
          login
          bio
          company
          location
        }
      }
    }
  }
`;
export default FollowersQ;
