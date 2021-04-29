import logo from './logo.svg';
import './App.css';

function App() {
  async function getTodo() {
    const models = await DataStore.query(Todo);
    console.log(models);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a UX demo I am making. Here is the next change. I am in dev.
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
