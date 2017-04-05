import React from 'react'

function ProductTile({ item }) {
    return (
        <div>
            <header>{ item.name }</header>
            <p>
                { item.description }
            </p>
            <span>{ item.price }$</span>
        </div>
    )
}

export default ProductTile
