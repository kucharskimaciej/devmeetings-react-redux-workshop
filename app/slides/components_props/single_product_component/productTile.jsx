import React from 'react'

function ProductTile(props) {
    return (
        <div>
            <header>{ props.item.name }</header>
            <p>
                { props.item.description }
            </p>
            <span>{ props.item.price }$</span>
        </div>
    )
}

export default ProductTile
