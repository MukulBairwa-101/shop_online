import React,{useState,useContext} from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Cart from "./Components/Cart";
import Products from "./Components/Products";
import "./style/App.css"
// import { Scrollbars } from 'react-custom-scrollbars-2';
import {FiShoppingCart} from "./assets/icons/Icons"
import {AppContext} from "./assets/context/AppContext";
import {logo} from "./assets/images/images"
const linkStyle ={
  color:"black",
  textDecoration:"none",
  width:"50%"
}
const homeIcon ={
  color:"white",
  textDecoration:"none",
  margin:"1rem",
  width:"45%"
}
function App() {
  const {value1,value2}=useContext(AppContext);
  // const[count,setCount]= useContext(AppContext);
  const[count,setCount]=value1;
  // const[open,setOpen]=state2;
  return (
    // <Scrollbars style={{ width: "100%", height: 1000 }}>
    <div className="app">
      <nav className="nav">
      <Link to="/"><img src ={logo} alt ="logo"  style ={homeIcon }/></Link>
        <ul>
          <li>
            <Link to="/" style ={linkStyle}>Store</Link>
          </li>
          <li>
           
            <Link to="/cart" style ={linkStyle}> <FiShoppingCart/></Link> 
            <span>{count}</span>
            
          </li>
          {/* {open} */}
        </ul>
        
      </nav>
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </div>
    // </Scrollbars>
  );
}

export default App;
