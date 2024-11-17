import React, { useContext } from 'react'
import { AllMenuContext } from './AllMenuContext'
import { DispatchContext } from '../context/AppProvider';

function Popup({ closePopupHandler, currentDish, addToCartHandler }) {

    const dispatch = useContext(DispatchContext)

    const allMenus = useContext(AllMenuContext);

    let popupDishDetails = allMenus.filter((items) => {
        return items.strMeal === currentDish
    }).map((item) => {
        return (
            <div className="popup-content ">

                <div className="popup-header">
                    <img src={item.strMealThumb} alt="image" />
                </div>

                <div className="name-category">
                    <h1> {item.strMeal} </h1>
                    <p> {item.strCategory} </p>
                </div>

                <p className='instructions'> {item.strInstructions} </p>

                <ul className="dish-ingredients d-flex">
                    <li> {item.strIngredient1} </li>
                    <li> {item.strIngredient2} </li>
                    <li> {item.strIngredient3} </li>
                    <li> {item.strIngredient4} </li>
                </ul>
                
                {/* ORDER NOW button click action and the data is passsed through dispatch*/}
                <button onClick={() => {
                    dispatch({
                        type: "add_to_cart",
                        payload: {
                            "title": item.strMeal,
                            "img": item.strMealThumb
                        }
                    })
                }}> Order Now </button>

            </div>
        )
    })

    return (
        <div className="popup d-flex">
            {popupDishDetails}
            <h5 className="popup-close" onClick={closePopupHandler}> Close </h5>
        </div>
    )
}

export default Popup
