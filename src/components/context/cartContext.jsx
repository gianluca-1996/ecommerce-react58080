/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, createContext, useEffect } from "react";
import {data} from "../../mocks/data"

export const CartContext = createContext();

const CartProvider = ({children}) => {

    const [productos, setProductos] = useState([])
    const [cart, setCart] = useState([])
    const [cantidadCarrito, setCantidadCarrito] = useState(0) //MANTIENE CONSISTENCIA EN EL NUMERO DE ITEMS DENTRO DEL CARRITO
    let datos, total = 0

    const getDatos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
                //reject("No se pudo obtener la data")
            }, 1000);
        })
    }

    async function fetchingData(){
        try {
            datos = await getDatos()
            setProductos(datos)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchingData()
    }, [])

    //SUMA EL TOTAL DE LA COMPRA
    for(let i = 0; i < cart.length; i++){
        total += cart[i].subtotal
    }

    const addItem = (item, cantidad) => {
        if(! isInCart(item)){
            setCart((dataPrevia) => [...dataPrevia, {...item, cantidad}])
            setCantidadCarrito(cantidadCarrito + cantidad)
        }
        else{
            alert('El producto ya fue agregado...')
        }
    }
    
    const removeItem = (item) => {
        const cartUpdated = cart.filter( (prod) => prod.id != item.id)
        setCart(cartUpdated)
        setCantidadCarrito(cantidadCarrito - item.cant)
    }

    const clearCart = () => {
        setCart([])
        setCantidadCarrito(0)
    }

    const isInCart = (item) => {
        return cart.some( (prod) => prod.id === item.id )
    }

    return(
        <CartContext.Provider value={{productos, addItem, removeItem, clearCart, cart, total, cantidadCarrito}}>{children}</CartContext.Provider>
    );
};

export default CartProvider;