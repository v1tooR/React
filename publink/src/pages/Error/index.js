import './error.css'
import {Link} from 'react-router-dom'

export default function Error(){// componente básico
    return(
        <div className='error'>
            <h1>
                Página de Erro
            </h1>
            <h3>
                Essa página não existe.
            </h3>

            <Link to="/" className='link'>
                Voltar para Home
            </Link>
        </div>
    )
}