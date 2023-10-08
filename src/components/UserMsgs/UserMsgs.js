import "./UserMsgs.css"
import React, { useEffect } from 'react'

const UserMsgs = (props) => {

    useEffect(() => {
        setTimeout(() => {
            props.hideMe()
        }, 5000)
    }, [])

    return (
        <article className={`user-msgs ${props.type}`}>
            <button onClick={props.hideMe} type="button">close</button>
            <section className="msgs">
                {
                    props.messages.map((message, index) => {
                        return <p key={index}>{message}</p>
                    })
                }
            </section>
        </article>
    )
}

export default UserMsgs