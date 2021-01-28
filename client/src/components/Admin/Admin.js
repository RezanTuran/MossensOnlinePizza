import React from 'react';
import '../Admin/style.css';

function Admin(props) {

  const { history } = props;

  const handleButtonClick = pageURL => {
      history.push(pageURL);
  };

  return (
    <div>
      <button onClick={() => handleButtonClick("/insertPizza")}>Produkter</button>
      <button onClick={() => handleButtonClick("/order")}>Beställningar</button>
    </div>
  );
}

export default Admin;
