import "./App.css";
import Application from "./application/Application";
import Counter from "./components/counter/Counter";
import { Skills } from "./skills/Skills";
import { ProviderTheme } from "./providers/AppProviders";
import MuiMode from "./Mui/MuiMode";
import CounterTwo from "./components/counter-two/CounterTwo";
import { useCounter } from "./hooks/useCounter";
import Users from "./components/users/Users";

function App() {
  const { count, increment, decrement } = useCounter();

  return (
    <ProviderTheme>
      <div className="App">
        <MuiMode />
        <CounterTwo
          count={count}
          handleIncrement={increment}
          handleDecrement={decrement}
        />

        <Users />
      </div>
    </ProviderTheme>
  );
}

export default App;
