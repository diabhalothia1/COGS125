import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App!</h1>
        <p>This is the homepage of your React app.</p>
        <button onClick={() => alert("Hello, world!")}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
