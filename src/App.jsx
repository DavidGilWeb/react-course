import Card from './components/card';
import Counter from './components/counter';
import ToggleButton from './components/ToggleButton';
import './App.css'

function App() {
  const items = ['DOGS', 'CATS', 'PIGS', 'COWS', 'HORSES', 'SHEEPS'];

  return (<div>
    <h2>Lista de animales</h2>
    <ul>
      {items.map((item) => (
         <Card title={item} description={`These animal are ${item}`} />
      ))}
    </ul>
    <Counter />
    <ToggleButton />
  </div>);

  
}

export default App
