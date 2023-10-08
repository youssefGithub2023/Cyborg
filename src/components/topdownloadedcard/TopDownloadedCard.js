import "./TopDownloadedCard.css"
import React from 'react'
import { Link } from 'react-router-dom'

import { FaDownload, FaStar } from "react-icons/fa"

const TopDownloadedCard = (props) => {
    return (
        <article className="top-downloaded-card">
            <section className="info-cont">
                <figure>
                    <img src={"http://localhost/project/uploads/gamesImgs/" + props.gameImgPath} alt={props.gameName} />
                </figure>
                <ul>
                    <li className="game-name">{props.gameName}</li>
                    <li className="game-category">{props.gameCategory}</li>
                    <li className="game-rd">
                        <span className="rating">
                            <span className="icon"><FaStar /></span>
                            <span className="val">{props.gameRate}</span>
                        </span>
                        
                        <span className="downloads">
                            <span className="icon"><FaDownload /></span>
                            <span className="icon">{props.gameDownloads}</span>
                        </span>
                    </li>
                </ul>
            </section>
            <section className="download">
                <Link to="/#">
                    <FaDownload />
                </Link>
            </section>
        </article>
    )
}

export default TopDownloadedCard