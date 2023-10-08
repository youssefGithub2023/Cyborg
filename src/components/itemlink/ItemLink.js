import "./ItemLink.css"
import React from 'react'

const ItemLink = (props) => {
    return (
        <li className="item-link">
            {props.children}
        </li>
    )
}

export default ItemLink