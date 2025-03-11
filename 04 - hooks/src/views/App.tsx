import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // essa importação para roteamento

import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";

import { DataProvider } from "../data/DataContext"; // ✅ Importando o Provider corretamente
import Store from '../data/Store'

const App = () => {
  return (
    <div className="App">
      <Store>
        <DataProvider>
          <Router>
            <Menu />
            <Content />
          </Router>
        </DataProvider>
      </Store>
    </div>
  );
};

export default App;
