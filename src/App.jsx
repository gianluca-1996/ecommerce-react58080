import './App.css'
import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import Footer from "./components/Footer"
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  return (
    <main className='main'>
      <Navbar/>
      <div className='divItemListContainer'>
        <ItemListContainer/>
      </div>
      <div className='divItemDetailContainer'>
        <ItemDetailContainer id={1}/>
      </div>
      <Footer/>
    </main>
  )
}

export default App
