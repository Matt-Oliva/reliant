/* eslint-disable react/button-has-type */
import React from 'react';
import SellingPoint from '../SellingPoint/SellingPoint';

import './App.scss';

function App() {
  return (
    <div className="app">
      <header className="header">
        header
      </header>

      <div className="content">
        <div className="img" />
        <div className="selling-points">
          <SellingPoint title="Services 1" bodyText="lorem ipsum hello there this is text" />
          <SellingPoint title="Services 2" bodyText="lorem ipsum hello there this is text" />
          <SellingPoint title="Services 3" bodyText="lorem ipsum hello there this is text" />
          <SellingPoint title="Services 4" bodyText="lorem ipsum hello there this is text" />
          <SellingPoint title="Services 5" bodyText="lorem ipsum hello there this is text" />
          <SellingPoint
            title="Services 6"
            bodyText="lorem ipsum hello there this is text lorem ipsum lorem ipsum hello
             there this is text hello there this is text lorem ipsum hello there this is text"
          />
        </div>
      </div>
      <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;
