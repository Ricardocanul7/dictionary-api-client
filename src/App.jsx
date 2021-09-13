import { useState } from "react";
import CardInfo from "./components/Card";
import Button from './components/Button';
import Select from './components/Select';
import Header from './components/Header';
import InputSearch from './components/InputSearch';
import Dropdown from './components/Dropdown';
import GroupButton from "./components/GroupButton";
import GroupButtonItem from "./components/GroupButtonItem";
import './App.css';


function App() {
  const [counter, setCounter] = useState(0);

  const options = [
    {
      value: "1",
      label: "Option 1",
    },
    {
      value: "2",
      label: "Option 2",
    },
    {
      value: "3",
      label: "Option 3",
    },
    {
      value: "4",
      label: "Option  4",
    },
  ];

  const options2 = [
    {
      value: "1",
      label: "Prueba 1",
    },
    {
      value: "2",
      label: "Prueba 2",
    },
  ]
  const dropdownList=[
    {
      value: "1",
      label: "Item 1",
    },
    {
      value: "2",
      label: "Item 2",
    },
    {
      value: "3",
      label: "Item 3",
    },
  ];
  const handleSum = () => {
    setCounter(counter + 1);
  };

  const handleRest = () => {
    setCounter(counter - 1);
  };

  const handleSumByNumber = (number) => {
    setCounter(counter + number);
  }

  const handleOnSelected = (value) => {
    console.log("Select 1 " + value);
  }

  const handleOnseleted2 = (value) => {
    console.log("Select 2 " + value);
  }

  const handleDropdown = (value) => {
    console.log(value);
  }
  
  const handleOptionSelect = () =>{

  };

  const handleSearchValue = (value) => {
    console.log(value);
  }
  
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
      <InputSearch onSearch={handleSearchValue} placeholder="Buscar..." />
        
      <div>
        <Select items={options} name="Select 1" onSelected={handleOnSelected} />
        <Select items={options2} name="Select 2" onSelected={handleOnseleted2} />

        <Dropdown items={dropdownList} name="Dropdown 1" onSelected={handleDropdown}/>

        <GroupButton>
          <GroupButtonItem value="+"/>
          <GroupButtonItem value="-"/>
          <GroupButtonItem value="+5"/>
          <GroupButtonItem value="+5"/>
        </GroupButton>
      </div>
    </div>
  );
}

export default App;
