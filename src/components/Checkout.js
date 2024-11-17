import { useContext } from 'react'
import { StateContext } from "../context/AppProvider";

const Checkout = () => {
    let cartPackage = useContext(StateContext)

    let cartItemsAre = cartPackage.cartItems.map((items) => {
        return (
            <div className='content'>
                <img src={items.img} />
                <h5 className='textCenter'> {items.title} </h5>
            </div>
        )
    })

    return (
        <div className='container f '>
            <div className="checkout-heading">
            <h1> This is a checkout page </h1>
            </div>
            <div className="checkout-container">
                {cartItemsAre}
            </div>
        </div>
  
    )
}
export default Checkout