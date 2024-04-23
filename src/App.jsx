import NavBar from "./components/NavBar/NavBar"
import './App.css'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {

  return (
    <div className="box-general">
      <NavBar/>
      <div className="container">
        <ItemListContainer saludo="Mis productos se listan aquí"/>
      </div>
      <div className="footer">
        Made with ❤️ by Angie © 2024
      </div>
    </div>
  )
}

export default App
