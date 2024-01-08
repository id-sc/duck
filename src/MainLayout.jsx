// MainLayout.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from './Footer';



const MainLayout = ({ children }) => {
  const location = useLocation();
  return (
    <div>
      <Helmet>
        <title>{`Cupcake Wonderland - ${location.pathname.replace('/', '')}`}</title>
        <link rel="icon" href="/icon_cupcake.png" type="image/x-icon" />
        <link rel="shortcut icon" href="/icon_cupcake.png" type="image/x-icon" />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};


export default MainLayout;
