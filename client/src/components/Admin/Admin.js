import React from 'react';
import { Helmet } from 'react-helmet';
import Dashboard from './Dashboard/Dashboard';

function Admin() {
  return (
    <>
      <Helmet>
        <title>Mossens Pizzeria | Admin</title>
      </Helmet>
      <Dashboard />
    </>
  );
}

export default Admin;
