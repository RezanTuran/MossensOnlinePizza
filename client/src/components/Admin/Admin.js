import React from 'react';
import '../Admin/style.css';

function Admin(props) {

  const { history } = props;

  const handleButtonClick = pageURL => {
      history.push(pageURL);
  };

  return (
    <div>
      <button onClick={() => handleButtonClick("/insertPizza")}>Lägg till pizza</button>
      <button onClick={() => handleButtonClick("/order")}>Beställningar</button>
      <button onClick={() => handleButtonClick("/register")}>Lägg till admin</button>
    </div>
  );
}

export default Admin;
