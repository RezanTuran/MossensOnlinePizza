import React from 'react';
import '../Admin/style.css';
import { Helmet } from "react-helmet";

function Admin(props) {

  const { history } = props;

  const handleButtonClick = pageURL => {
    history.push(pageURL);
  };

  return (
    <>
      <Helmet>
        <title>Mossens Pizzeria | Admin</title>
      </Helmet>
      <div>
        <button onClick={() => handleButtonClick("/insertPizza")}>Lägg till pizza</button>
        <button onClick={() => handleButtonClick("/order")}>Beställningar</button>
        <button onClick={() => handleButtonClick("/register")}>Lägg till admin</button>
      </div>
    </>
  );
}

export default Admin;
