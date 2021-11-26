import { gql } from "@apollo/client";

const IssueQ = gql`
  query Repository($owner: String!, $repository: String!) {
    repository(owner: $owner, name: $repository) {
        issues(first: 10) {
          nodes {
            author {
              login
            }
            body
            url
            state
            title
          }
          pageInfo {
            hasNextPage
            endCursor
          }
          totalCount
        }
      }
  }
`;

export default IssueQ;
