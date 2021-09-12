import React from 'react';
import { useState } from 'react';
import './styles/Select.css';

const Select = ({ items, name, onSelected}) => {
  const [selected, setSelected] = useState("1");

  const handleOnChange = (e) => {
    onSelected(e.target.value);
  }

  return (
    <div className="box">
      <label>{ name }</label>
      <select value={selected} onChange={handleOnChange}>
        {items.map((option) => {
          return <option key={option.value} value={option.value}>{option.label}</option>
        })
        }
      </select>
    </div>
  )
}

export default Select
