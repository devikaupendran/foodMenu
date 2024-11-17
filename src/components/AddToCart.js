import React,{useContext} from 'react'
import {StateContext} from "../context/AppProvider"

const AddToCart = ({ addToCartItem }) => {
    let cartPackage = useContext(StateContext);
    console.log(cartPackage);
    
    let cartItemsAre = cartPackage.cartItems.map((items) => {
        return (
            <>
                <img src={items.img} />
                <h5 className='textCenter'> {items.title} </h5> 
            </>
        )
    })

    let addToCartItemsAre = addToCartItem.map((item) => {
        return (
            <div>
                <img src={item.img} />
                <h5 className='textCenter'> { item.title } </h5> 
            </div>
        )
    })
    return (
        <div className="add-to-cart-wrapper">
            <div className="add-to-cart-item">
                {cartItemsAre}
            </div>
        </div>
    )
}

export default AddToCart
