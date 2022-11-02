import { useState } from "react";
import { Tweet } from "./components/Tweet" // Importar a function e onde ela esta
import './App.css'
import { AppRoutes } from "./Rout";


function App() {
  const [tweet, setTweet] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
    'Tweet 4',
  ]) // Uma forma de resetar os valores a serem postos dentro da interface
  // salvando dentro do array uma lista de strings

  function createTweet(){
    //console.log('funcionou')
    setTweet([...tweet,'Tweet Extra']) // ... Permanece os antigos objetos dentro do array
  }

  return(
    //<AppRoutes />

    <div>
      {
        tweet.map(tweet => { //percorre dentro da variável tweet
          return <Tweet text={tweet} /> // retornando o texto q contem de 'tweet'
        })
      }

      <button
        onClick={createTweet}
        style={{ // estilizando com css in js
          fontFamily: 'monospace',
          backgroundColor: '#BF4D4D',
          borderRadius: '10px',
          borderStyle: 'none',
          padding: '10px',
          color: 'white'
        }}
        > 
        Adicionar Tweet 
      </button> 
    </div> // Para todas as functions, comecar com uppercase*/
  ); 
   //uma function que retorna html
}

export default App
