//import logo from './logo.svg';
import './App.css';
import Pessoa from './components/Pessoa';
import FragmentComponent from './components/FragmentComponent';

function App() {

  return (
    <div className="App">
      <Pessoa nome="felipe"  foto="https://via.placeholder.com/150" profissao="programador" />
      <FragmentComponent/>
    </div>
      
  );
}

export default App;
