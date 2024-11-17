import React, { useContext, useState } from 'react'
import Card from './Card';
import Popup from './Popup';
import AddToCart from './AddToCart'
import { AllMenuContext } from './AllMenuContext'

function SpecialDishes() {

    const allMenus = useContext(AllMenuContext);
    //POPUP

    let [showPopup, setShowPopup] = useState(false); //state for popup display
    let [currentDish, setCurrentDish] = useState('')
    let [addToCartItem, setAddToCartItem] = useState([])

    //Lets define the body of the function from card.js
    function showPopupHandler(dishName) {
        setShowPopup(true)
        setCurrentDish(dishName)
    }

    //Lets define the body of the function from popup.js
    function closePopupHandler() {
        setShowPopup(false)
    }

    //Lets handle the button in popup 
    function addToCartHandler(cartImg, cartTitle) {
        setAddToCartItem(
            [
                ...addToCartItem,
                {
                    "img": cartImg,
                    "title": cartTitle,
                    "close" : "close"
                }
            ]
        )
    }

    //let's display 8 special dishes using allMenus state
    let maxnumberSpecialDishes = 8;
    let specialDishes = allMenus.map((items, index) => {
        if (index < maxnumberSpecialDishes) {
            return (
                <Card items={items} showPopupHandler={showPopupHandler} />
            )
        }
    })

    return (
        <section>
            <div className="container">
                <AddToCart addToCartItem={addToCartItem} />
                {showPopup && <Popup closePopupHandler={closePopupHandler} currentDish={currentDish} addToCartHandler={addToCartHandler} />}

                <div className="special-dishes-content content-style">
                    <h1> Our Special Dishes </h1>
                    <p> Explore our exclusive collection of special dishes, each thoughtfully crafted to offer a unique and unforgettable dining experience. From exquisite flavors to innovative presentations, these dishes are perfect for those seeking something extraordinary. </p>
                </div>

                <div className="special-dishes-display">
                    <ul className='d-flex'> {specialDishes} </ul>
                </div>
            </div>
        </section>
    )
}

export default SpecialDishes
