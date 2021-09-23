import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact'

const routing = (  
  <Router>  
    <div>  
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link> 
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link> 
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h1>React Routing</h1>    
      <Switch>
        <Route exact path="/" component={Home} />  
        <Route path="/about" component={About} />  
        <Route path="/contact" component={Contact} />
      </Switch>  
    </div>  
  </Router> 
)  
ReactDOM.render(routing, document.getElementById('root')); 