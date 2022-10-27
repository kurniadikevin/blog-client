import React from 'react';
import './app.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { PostDetail } from './pages/PostDetail';


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/posts/:id" exact component={PostDetail} />
     
    </Switch>
  </BrowserRouter>
);

export default App;