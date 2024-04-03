import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartContextProvider/CartContextProvider'
import SingleCartItem from '../SingleCartItem/SingleCartItem'
import { ThemeContext } from '../ThemeContextProvider/ThemeContextProvider';
import MyNavbar from '../MyNavbar/MyNavbar';
import Alert from 'react-bootstrap/Alert';
import MyFooter from '../MyFooter/MyFooter';
import "./AddToCart.css";
import { Container } from 'react-bootstrap';
import { CartCounterContext } from '../CartCounterContextProvider/CartCounterContextProvider';

export default function AddToCart() {

    const { cart, setCart } = useContext(CartContext)

    const { theme } = useContext(ThemeContext)

    const [alert, setAlert] = useState("");

    const [totalPrice, setTotalPrice] = useState(0);

    const { setCount } = useContext(CartCounterContext)


    useEffect(() => {

        const dataLocal = localStorage.getItem("cart")
        if (dataLocal) {
            setCart(JSON.parse(dataLocal))
        }
    }, [])


    useEffect(() => {
        console.log(cart, "è cambiato")
        if (cart && Object.keys(cart).length > 0 && localStorage.getItem("cart") !== JSON.stringify(cart)) {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart])


    const handleRemove = (item) => {
        console.log(item)
        setCount((prevState) => prevState - 1)
        if (item.quantity > 1) {
            const updatedCart = cart.map(cartItem => {
                if (cartItem.asin === item.asin) {
                    return { ...cartItem, quantity: cartItem.quantity - 1 };
                }
                return cartItem;
            });
            setCart(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart))
        } else {
            const updatedCart = cart.filter((el) => el.asin !== item.asin)
            setCart(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart))
            setAlert(item.title)
            setTimeout(() => {
                setAlert("")
            }, 3000);
        }
    }

    useEffect(() => {
        const tot = totalPriceItems();
        setTotalPrice(tot);

    }, [cart])


    const totalPriceItems = () => {
        const calculate = cart.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);
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
                    <div className='main'>
                        <Container className='mt-4'>
                            <h3>{totalPrice > 0 ? `Il totale del carrello è: ${totalPrice}€` : "Il carrello è vuoto"}</h3>
                        </Container>
                        {cart &&
                            cart.map((el) => <SingleCartItem key={el.asin} title={el.title} img={el.img} price={el.price} quantity={el.quantity} handleRemove={handleRemove} totalPrice={totalPrice} setPrice={setTotalPrice} item={el} />)}
                    </div>
                </div>
                <div className='footer'>
                    <MyFooter />
                </div>
            </div >
        </>
    )
}
