import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementBy } from './slices';

function App() {
  const { counter } = useSelector(state => state.counter);  // permite leer o usar algo de nuestro store
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          count is {counter}
        </p>
        <p>
          <button type="button" onClick={() => dispatch(increment())}>
            Increment
          </button>
          <button type="button" onClick={() => dispatch(decrement())}>
            Decrement
          </button>
          <button type="button" onClick={() => dispatch(incrementBy(2))}>
            IncrementBy
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
