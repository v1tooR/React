
import "./login.css"
import { Logo } from "../../components/logo"
import { useState } from "react"
import { toast } from 'react-toastify'
import { auth } from "../../services/firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login(){// componente basico
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleLogin(e){
        e.preventDefault();

        if(email === '' || password === ''){
            alert("Preencha todos os campos")
            return;
        }
        
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            toast.success("Bem vindo!")
            navigate("/admin", {replace:true})
        })
        .catch(() => {
            toast.error("Erro ao fazer o login")
            console.log("Usuario não encontrado!")
        })
    }

    return(
        <div className="login-container">
            <Logo/>
            <form className="form" onSubmit={handleLogin}>
                <input type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Digite sua senha" autoComplete="on" value={password} onChange={(e) => setPassword(e.target.value)}/>
            
                <button type="submit">Acessar</button>
            </form>
        </div>
    )
}