import React from 'react';

import Topic from '../Topic'

const ExplorerDisplay = ({exploreTopic, data, topic}) => {
    return (
        <>
            <h1>Topic: {topic}</h1>
            <h2>Stargazers: {data.topic.stargazerCount}</h2>
            <h4>Related Topics:</h4>
            {
                data.topic.relatedTopics.length > 0? 
                    data.topic.relatedTopics.map((item)=> (
                        <Topic key={item.name} topic={item} exploreTopic={exploreTopic} />
                    ))
                    :
                'No related topics found'
            }
        </>
    )
}

export default ExplorerDisplay