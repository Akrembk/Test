import './App.css';
import Contact from "./pages/Contact";
import Products from "./pages/products";
import React from "react";
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

function App() {
  return (
    <>
    <Router>

    <Link to="/contact"><button>Contact</button></Link>
    <Link to="/products"><button>Products</button></Link>
    
    <Switch>
    <Route path='/contact' component={Contact}/>
    <Route path='/products' component={Products}/>
    </Switch>
    </Router>
    </>
  );
}

export default App;
