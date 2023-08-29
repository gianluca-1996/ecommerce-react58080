/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, createContext, useEffect } from "react";
import {data} from "../../mocks/data"

export const CartContext = createContext();

const CartProvider = ({children}) => {

    let [productos, setProductos] = useState([])
    let [cart, setCart] = useState([])
    let datos

    const getDatos = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data)
            }, 1000);
        })
    }

    async function fetchingData(){
        datos = await getDatos()
        setProductos(datos)
    }

    useEffect(() => {
        fetchingData()
    }, [])

    console.log(cart)

    const addItem = (item, cantidad) => {
        if(! isInCart(item)){
            setCart((dataPrevia) => [...dataPrevia, {...item, cantidad}])
        }
        else{
            alert('El producto ya fue agregado...')
        }
    }

    const removeItem = (item) => {
        const cartUpdated = cart.filter( (prod) => prod.id !== item.id)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (item) => {
        return cart.some( (prod) => prod.id === item.id )
    }

    return(
        <CartContext.Provider value={{productos, addItem, removeItem, clearCart, cart}}>{children}</CartContext.Provider>
    );
};

export default CartProvider;