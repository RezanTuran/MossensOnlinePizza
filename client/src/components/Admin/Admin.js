import React from 'react';
import '../Admin/style.css';
import InsertPizza from './InserPizza';
import PizzaProperties from './PizzaProperties';

function Admin() {


  return (
    <div>
      <InsertPizza />
      <PizzaProperties />
    </div>
  );
}

export default Admin;
