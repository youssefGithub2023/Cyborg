import "./LibraryCard.css"
import React from 'react'

import { SecondaryButton } from ".."

const LibraryCard = (props) => {
    return (
        <ul className="base library-card">
            <li>
                <figure>
                    <img src={props.gameImg} alt={props.name} />
                </figure>
            </li>
            <li>
                <h3>{props.gameName}</h3>
                <span>{props.gameType}</span>
            </li>
            <li>
                <h3>date added</h3>
                <span>{props.addDate}</span>
            </li>
            <li>
                <h3>hours played</h3>
                <span>{props.hoursPlayed}</span>
            </li>
            <li>
                <h3>currently</h3>
                <span>{props.currently}</span>
            </li>
            <li>
                <SecondaryButton href="#">download</SecondaryButton>
            </li>
        </ul>
    )
}

export default LibraryCard