import React from "react";
import { Link } from "react-router-dom";
import "./App.css";



const Header =()=>{
return(
    <nav className="HEATHER">
    <ul className="navbar">
     
     
     
      <li>
      <Link className="Linkk" to="/History">History</Link>
    
      </li>
      <li>
      <Link className="Linkk" to="/add-card">addcard</Link>
    
      </li>
      <li>
      <Link className="Linkk" to="/transection">transection</Link>
    
      </li>
      <li>
      <Link className="Linkk" to="/UpdateCard">update</Link>
    
      </li>
    </ul>
        </nav>
)
}

export default Header;