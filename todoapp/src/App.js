import FirstComponent from './components/FirstComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Hello World</h2>
      {/*Inclusão do component dentro do app*/}
      <FirstComponent/>
    </div>
  );
}

export default App;
