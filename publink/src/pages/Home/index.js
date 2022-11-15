import './home.css'
import { Social } from '../../components/Social'
import {FaFacebook, FaFacebookMessenger, FaFacebookSquare, FaInstagram, FaInstagramSquare, FaTiktok, FaTwitter} from 'react-icons/fa'

export default function Home(){// componente básico
    return(
        <div className='home-container'>
            <h1>v1tooR</h1>
            <span>
                Veja meus links 👇
            </span>


        <main className='links'>

            <section className='link-area'>
                <a href='#'>
                    <p className='link-text'>Canal no Youtube</p>
                </a>
            </section>

            <section className='link-area'>
                <a href='#'>
                    <p className='link-text'>Github</p>
                </a>
            </section>

            <section className='link-area'>
                <a href='#'>
                    <p className='link-text'>Twitter</p>
                </a>
            </section>
        </main>

        <footer>
            <Social url="https://www.facebook.com/victor.dasilvasantos.779/">
                <FaFacebookSquare size={35} color="#FFF"/>  
            </Social>
            <Social url="https://www.instagram.com/">
                <FaInstagram size={35} color="#FFF"/>  
            </Social>
            <Social url="https://www.tiktok.com/pt-BR/">
                <FaTiktok size={35} color="#FFF"/>  
            </Social>
        </footer>
            
        </div>
    )
}