import React from "react";
import {withRouter} from 'react-router-dom'
import Searchbar from "./Searchbar";
 function NavigationBar(props) {
    console.log(props)
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
      <a href="/" className="navbar-brand"><span className="first-letter">P</span>okedox</a>


      {props.location.pathname === '/'?
      <Searchbar onSearchChange = {props.onSearchChange}/>:''}
      </div>   
    </nav>
  );
}
export default withRouter(NavigationBar)