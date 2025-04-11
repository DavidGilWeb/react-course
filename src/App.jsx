import Card from './components/card';
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
  </div>);

  
}

export default App
