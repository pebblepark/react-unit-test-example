import './App.css';
import logo from './logo.svg';

export function add(a: number, b: number) {
  return a + b;
}

export function Login() {
  return (
    <div>
      <div>
        <input type="email" name="email" placeholder="email" />
      </div>
      <div>
        <input type="password" name="password" placeholder="password" />
      </div>

      <div>
        <button type="button">Sign In</button>
        <button type="button">Sign Up</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
