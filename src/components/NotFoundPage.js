import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Header />
      La pagina no funciona <Link to="/dashboard">Inicio</Link>
    </React.Fragment>
  );
};

export default NotFoundPage;
