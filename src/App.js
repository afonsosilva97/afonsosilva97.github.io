import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Let's gooooooo!</p>
        <a
          href="https://www.linkedin.com/in/afonso-marinho-da-silva/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="https://www.linkedin.com/in/afonso-marinho-da-silva/">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
      </header>
    </div>
  );
}

export default App;
