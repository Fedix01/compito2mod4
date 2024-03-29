import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartContextProvider/CartContextProvider'
import SingleCartItem from '../SingleCartItem/SingleCartItem'
import { ThemeContext } from '../ThemeContextProvider/ThemeContextProvider';
import MyNavbar from '../MyNavbar/MyNavbar';
import Alert from 'react-bootstrap/Alert';
import MyFooter from '../MyFooter/MyFooter';
import "./AddToCart.css";
import { Container } from 'react-bootstrap';

export default function AddToCart() {

    const { cart, setCart } = useContext(CartContext)

    const { theme } = useContext(ThemeContext)

    const [alert, setAlert] = useState("");

    const [totalPrice, setTotalPrice] = useState(0);

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

    useEffect(() => {
        const tot = totalPriceItems();
        setTotalPrice(tot);

    }, [cart])


    const totalPriceItems = () => {
        const calculate = cart.reduce((total, cartItem) => total + cartItem.price, 0);
        const formattedTotal = parseFloat(calculate.toFixed(2));
        return formattedTotal
    }
    return (
        <>
            <div className={theme === "dark" ? "bg-dark text-light main" : "bg-light main"}>
                <MyNavbar />

                {alert &&
                    <Alert className='alert' variant="danger">
                        Elemento eliminato : {alert}
                    </Alert>}
                <div>
                    {cart &&
                        cart.map((el) => <SingleCartItem key={el.asin} title={el.title} img={el.img} price={el.price} handleRemove={handleRemove} totalPrice={totalPrice} item={el} />)}
                </div>
                <Container className='mt-4'>
                    <h3>{totalPrice > 0 ? `Il totale del carrello è: ${totalPrice}€` : "Il carrello è vuoto"}</h3>
                </Container>

                <div className='footer'>
                    <MyFooter />
                </div>
            </div >
        </>
    )
}
