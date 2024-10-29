import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" width="200" />
        <h1>Welcome to My Portfolio!</h1>
        <p>This is the homepage.</p>
        <button onClick={() => alert("Hello, world!")}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
