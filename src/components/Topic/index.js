import React from 'react';

const TopicDisplay = ({exploreTopic, topic}) => {
    return (
        <div key={topic.name} onClick={()=>exploreTopic(topic.name)}>{topic.name}</div>
    )
}

export default TopicDisplay