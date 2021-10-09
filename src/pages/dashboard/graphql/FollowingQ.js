import { gql } from "@apollo/client";

const FollowingQ = gql`
  query Following($username: String!) {
    user(login: $username) {
      id
      following(first: 10) {
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
export default FollowingQ;
