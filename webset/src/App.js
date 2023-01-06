import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import './App.css'
import {Routers} from "./View/Router";

export const localhost='localhost:8080'
export const localhost_frontend='localhost:3000'

function App() {
  return (
      <div className="App">
        <Routers />
      </div>
  );
}

export default App;
