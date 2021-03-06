import React, { useEffect, ReactFragment } from "react";
import { LightMode } from "../context/context";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Header.css";

export default (props) => {
  return (
    <LightMode.Consumer>
      {(context) => (
        <nav className={`navbar navbar-expand-lg navbar-${context.mode} bg-${
          context.mode
        }  text-${
          context.mode == "light" ? "dark" : "light"
        }  border-bottom border-secondary`} 
        >
        <Link className="navbar-brand font-weight-bold" to="/home">
            Home
          </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div className={`collapse navbar-collapse bg-${context.mode}`} id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                 <Link to="/products/category1" className=" font-weight-normal">
               <li className="nav-item ml-4">
                   Category1
               </li>
                 </Link>
               <li className="nav-item ml-4">
                 <Link to="/products/category2" className=" font-weight-normal">
                   Category2
                 </Link>
               </li>
               <li className="nav-item ml-4">
                 <Link to="/products/category3" className=" font-weight-normal">
                   Category3
                 </Link>
               </li>
             </ul>
          <div className="form-inline my-2 my-lg-0">
               <span className="ml-1 ">
                 <h4>
                   <i class="fas fa-moon"></i>
                 </h4>
               </span>
               <span className="">
                 <h4>
                   <div className="custom-control custom-switch">
                     <input
                       type="checkbox"
                       className="custom-control-input"
                       value="true"
                       onClick={props.changeLightMode}
                       id="customSwitches"></input>
                       <label
                       className="custom-control-label dp-none"
                       for="customSwitches"
                     ></label>
                   </div>
                 </h4>
               </span>
               <span className="mr-2 ">
                 <h4>
                   <i class="fas fa-sun"></i>
                 </h4>
               </span>
             </div>
        </div>
      </nav>
      
      )}
    </LightMode.Consumer>
  );
};
