import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  const handle = async () => {
    const result = await axios.get("http://localhost:5000/api/wilder")
    console.log(result)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code onClick={handle}>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
