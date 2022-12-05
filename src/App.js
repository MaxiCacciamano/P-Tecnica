import './App.css';

import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {BrowserRouter,Route, Switch } from 'react-router-dom';


import {Home} from './Component/Home';



function App() {

  return (
    <BrowserRouter>
    <div className="App">
         
      <Switch>
         <Route path="/" component={Home}/> 
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
