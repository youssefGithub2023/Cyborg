import "./LiveStreamCard.css"
import React from 'react'

const LiveStreamCard = (props) => {
    return (
        <article className="live-stream-card">
            <figure>
                {props.icon}
            </figure>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </article>
    )
}

export default LiveStreamCard