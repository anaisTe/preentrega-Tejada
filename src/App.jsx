import NavBar from "./components/NavBar/NavBar"
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"


function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <div className="container vh-100">
        <Routes>
          <Route path="/" element={ <ItemListContainer saludo="Bienvenido a mi tienda"/> } />
          <Route path="/category/:idCategory" element={ <ItemListContainer/> } />
          <Route path="/detail/:nameProduct" element={ <ItemDetailContainer/> } />
        </Routes>
      </div>
      <div className="footer">
        Made with ❤️ by Angie © 2024
      </div>
    </BrowserRouter>
  )
}

export default App
