import './App.css'
import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import Footer from "./components/Footer"
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartProvider from './components/context/cartContext'
import Cart from './components/Cart'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <main className='main'>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer />}/>
            <Route path='/item/:id' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart />}/>
          </Routes>
          <Footer/>
        </main>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
