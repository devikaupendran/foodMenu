import React from 'react'

function Card({ items ,showPopupHandler }) {

    return (
        <li className='card'>
            <a href="javaScript:;"  onClick = { () => { showPopupHandler (items.strMeal) } }>
                <img src={items.strMealThumb} alt="image" />
                <h4> {items.strMeal} </h4>
            </a>
        </li>
    )
}

export default Card
