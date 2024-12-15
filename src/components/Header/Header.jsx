import React from 'react'
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import './Header.scss';


const Header = () => {
  return (
    <>
 <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
   <div className="container-fluid">
     <div className="collapse navbar-collapse" id="navbar-content">
       <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
         <li className="nav-item">
           <Link to="/"className="nav-link active">Home</Link>
         </li>
         <li className="nav-item">
           <Link to="/Form" className="nav-link">Add News</Link>
         </li>
         <li className="nav-item">
           <Link to="/ListNews" className="nav-link">News</Link>
         </li>
       </ul>
       
     </div>
   </div>
 </nav> 
    </>
    
  )
}

export default Header