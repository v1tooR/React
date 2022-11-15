
import "./login.css"
import { Logo } from "../../components/logo"
import { useState } from "react"

import { auth } from "../../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login(){// componente basico
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e){
        e.preventDefault();

        if(email === '' || password === ''){
            alert("Preencha todos os campos")
            return;
        }

        /*console.log(email);
        console.log(password);*/
        
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log("Usuario encontrado!")
        })
        .catch(() => {
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