import logo from './logo.svg';
import './App.css';
import Message from './components/Message';

const myName = 'Vika';  

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message name={myName}/>
      </header>
    </div>
  );
}

export default App;
