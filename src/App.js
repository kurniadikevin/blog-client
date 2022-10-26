import React from 'react';
import './app.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { PageTwo } from './pages/PostDetail';


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/page2" exact component={PageTwo} />
     
    </Switch>
  </BrowserRouter>
);

export default App;