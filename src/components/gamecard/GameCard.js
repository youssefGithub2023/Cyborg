import "./GameCard.css"
import React from 'react'

import { FaStar, FaDownload } from "react-icons/fa"

const GameCard = (props) => {
    return (
        <article className="game-card">
            <figure>
                <img src={"http://localhost/project/uploads/gamesImgs/" + props.gameImgPath} alt={props.gameName} />
            </figure>
            <ul>
                <li>
                    <h3>{props.gameName}</h3>
                    <span className="in-cont">
                        <span className="icon"><FaStar /></span>
                        <span className="count"> {props.gameRate}</span>
                    </span>
                </li>
                <li>
                    <span className="game-type">{props.gameCategory}</span>
                    <span className="in-cont">
                        <span className="icon"><FaDownload /></span>
                        <span className="count"> {props.gameDownloads}</span>
                    </span>
                </li>
            </ul>
        </article>
    )
}

export default GameCard