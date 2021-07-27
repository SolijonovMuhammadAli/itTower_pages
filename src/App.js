import React from 'react'
import Signin from './Components/SingIn'
import ForgotPassword from './Components/ForgotPassword'
import Dashboard from './Components/Dashboard'
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'


function App() {
  return (
    
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
            <div className="w-100" >
                <Router>
                        <Switch>
                            <Route exact path='/' component={Signin}/>
                            <Route path='/dashboard' component={Dashboard}/>
                            <Route path='/forgot-password' component={ForgotPassword}/>
                        </Switch>
                </Router>
            </div>
      </Container>
  );
}

export default App;
