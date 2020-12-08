import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useHistory, useParams } from "react-router-dom";
import ExplorerDisplay from './ExplorerDisplay';

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

const ExplorerContainer = () => {

    const history = useHistory();
    const { topic = 'react' } = useParams();


    const { loading, error, data } = useQuery(SEARCH_FOR_TOPIC, 
    {
        variables: { search_term: topic },
    })


    const exploreTopic = (topicName) => {
        history.push(`/topic/${topicName}`)
    }
    
    if (loading) return <p>Loading ...</p>;
    if (error) return `Error! ${error.message}`;

    return (
        <ExplorerDisplay exploreTopic={exploreTopic} data={data} topic={topic}/>
    )
}

export default ExplorerContainer