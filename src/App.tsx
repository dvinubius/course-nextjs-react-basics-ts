import './App.css';
import Title from './Title/Title';
import Counter from './Counter/Counter';

function App() {

  const handleIncrement = (): void => {
    console.log('Incremented!');
  }
  
  return (
    <div className="App">

      <Title message='Happy Bedtime!' />

      <Counter animal='Sheep' onIncrement={handleIncrement}/>

    </div>
  );
}

export default App;
