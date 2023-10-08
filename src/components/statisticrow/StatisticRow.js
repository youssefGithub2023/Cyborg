import "./StatisticRow.css"
import React from 'react'

const StatisticRow = (props) => {
    return (
        <li className="statistic-row">
            <span className="text">{props.text}</span><span className="count">{props.count}</span>
        </li>
    )
}

export default StatisticRow