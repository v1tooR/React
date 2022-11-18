import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {router} from './App'; // chamando a constante router 
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom' // puxa as funções da biblioteca router-dom
import {ToastContainer} from 'react-toastify'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // renderiza o componente a partir das tags
  <React.StrictMode>
    <ToastContainer autoClose={2000}></ToastContainer>
    <RouterProvider router={ router }/> 
  </React.StrictMode> // renderiza toda a rota configurada dentro do App.js
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
