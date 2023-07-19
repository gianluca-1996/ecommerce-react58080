import './App.css'
import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import Footer from "./components/Footer"

function App() {
  return (
    <main className='main'>
      <Navbar/>
      <ItemListContainer greetings={"Hola Mundo React!"}/>
      <Footer/>
    </main>
  )
}

export default App
