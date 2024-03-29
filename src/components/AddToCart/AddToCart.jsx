import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartContextProvider/CartContextProvider'
import SingleCartItem from '../SingleCartItem/SingleCartItem'
import { ThemeContext } from '../ThemeContextProvider/ThemeContextProvider';
import MyNavbar from '../MyNavbar/MyNavbar';
import Alert from 'react-bootstrap/Alert';
import MyFooter from '../MyFooter/MyFooter';
import "./AddToCart.css";

export default function AddToCart() {

    const { cart, setCart } = useContext(CartContext)

    const { theme } = useContext(ThemeContext)

    const [alert, setAlert] = useState("");

    useEffect(() => {
        console.log(cart, "è cambiato")
    }, [cart])

    const handleRemove = (item) => {
        console.log(item)
        const updateCart = cart.filter((el) => el.asin !== item.asin)
        setCart(updateCart);
        setAlert(item.title)
        setTimeout(() => {
            setAlert("")
        }, 3000);
    }

    return (
        <>
            <MyNavbar />
            {alert &&
                <Alert variant="danger">
                    Elemento eliminato : {alert}
                </Alert>}
            <div className={theme === "dark" ? "bg-dark text-light main" : "bg-light main"}>
                {cart &&
                    cart.map((el) => <SingleCartItem key={el.asin} title={el.title} img={el.img} handleRemove={handleRemove} item={el} />)}
            </div>
            <div className='footer'>
                <MyFooter />
            </div>
        </>
    )
}
