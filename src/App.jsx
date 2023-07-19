import './App.css'
import Navbar from "./components/Navbar"
import MainView from "./components/MainView"
import Footer from "./components/Footer"

function App() {
  return (
    <main className='main'>
      <Navbar/>
      <MainView/>
      <Footer/>
    </main>
  )
}

export default App
