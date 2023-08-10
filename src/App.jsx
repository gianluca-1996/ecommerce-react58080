import './App.css'
import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import Footer from "./components/Footer"
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  return (
    <main className='main'>
      <Navbar/>
      <div>
        <ItemListContainer/>
      </div>
      <div>
        <ItemDetailContainer id={1}/>
      </div>
      <Footer/>
    </main>
  )
}

export default App
