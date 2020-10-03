import React from "react"
import button from "./Button"

function Product (props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.author}</p>
            <p>{props.description}</p>
            <p>{props.price}</p>
            <img src = {props.src} alt={props.alt} width="400px"></img>
            <p>{button}</p>
        </div>
    )
}

export default Product;