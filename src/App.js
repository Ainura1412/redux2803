
import Counter from './components/Counter'
import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Todos />
      </header>
    </div>
  );
}

export default App;