import {
    BrowserRouter as Router,
    Routes,
    Route,
   
  } from "react-router-dom"; // Propriedades para fazer a relação das rotas

  import { Catalogo } from "./pages/Catalogo"; // importando as páginas
  import { Cart } from "./pages/Cart";

  export function AppRoutes(){ // Criando as rotas
    return(
      <Router>
        <Routes> 
          <Route path="/Catalogo" element={<Catalogo />}/>
          <Route path="/Cart" element={<Cart />}/>
        </Routes>
      </Router>
    )
  }