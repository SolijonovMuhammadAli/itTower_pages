import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Form from './components/Form'
import TextAria from './components/TextAria';

ReactDOM.render(
  <React.StrictMode>
     <Router>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/textarea">
            <TextAria />
          </Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);