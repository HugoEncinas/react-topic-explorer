import { gql } from '@apollo/client';

export const SEARCH_FOR_TOPIC = gql`
    query($search_term: String!) {
      topic(name: $search_term) { 
        stargazerCount
        relatedTopics {
          name
        } 
      }
    }
`;