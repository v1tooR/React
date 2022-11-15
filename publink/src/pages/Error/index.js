import './error.css'
import {Link} from 'react-router-dom'
import {Logo} from '../../components/logo'

export default function Error(){// componente básico
    return(
        <div className='error'>
            <Logo/>
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