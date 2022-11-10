import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Error from './pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/admin',
    element: <Admin/>
  },
  {
    path: '*',
    element: <Error/>
  }
])
export{ router };
// criação de um componente pré definido
/*function Aluno({nome, curso}){ // a propriedade nome é colocado dentro dos parâmetros
  return(
    <div>
      <h2>Bem vindo {nome}</h2>
      <h3>Curso atual: {curso}</h3>
      <br/>
    </div>
  )
}*/