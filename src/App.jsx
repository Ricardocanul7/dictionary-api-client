import { useState } from "react";
import CardInfo from "./components/Card";
import Button from './components/Button';
import Header from './components/Header';
import InputSearch from './components/InputSearch';
import List from './components/List';
import Dropdown from './components/Dropdown';
import './App.css';


function App() {
  const [counter, setCounter] = useState(0);

  const handleSum = () => {
    setCounter(counter + 1);
  };

  const handleRest = () => {
    setCounter(counter - 1);
  };

  const handleSumByNumber = (number) => {
    setCounter(counter + number);
  };
  
  const handleOptionSelect = () =>{

  };
  
  return (
    <div className="App">
      <Header name="Mi diccionario online." />
      { counter }

      <div>
        <Button text="-" setClick={handleRest} />
        <Button text="+" setClick={handleSum} />
        <Button text="+5" setClick={() => handleSumByNumber(5)} />
      </div>

      <br />
      <CardInfo />
      <InputSearch placeholder="Buscar..." />
        
      <div>
        <List></List>
        <Dropdown></Dropdown>
      </div>
    </div>
  );
}

export default App;
