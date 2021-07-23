import { useState } from "react";
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";
// import { LightMode } from "./context/context";
// import './App.css';
// import {Home} from "./components/Home";
// import Header from "./components/Header";
import * as product from '../data/data.json';

import { LightMode } from "../context/context";
import { Err } from "../error/Err";

export default ()=> {
  let id = useParams().productId;
  let res = product.data[id[0]-1].products[id[2]-1];

if(res==undefined || res==null)
  return(
  <LightMode.Consumer>
    {
      context=>(
        <div className={`container-flex pt-4 bg-${context.mode} text-center text-danger m-0 pl-2`} style={{minHeight:'93%'}}>
          <h1 style={{fontSize:'calc(1rem + 1vw)'}}>INVALID PRODUCT ID!</h1>
        </div>
      )
    }
  </LightMode.Consumer>
)
else
  return (
    <Err>
      <LightMode.Consumer>
          {
              context=>(
                <div
                 className={`card bg-${context.mode} text-${context.mode=='light'?'dark':'light'} text-center`}
                 style={{height:'93%', width:'100%'}}>
                <div
                className={`card bg-${context.mode} p-1 border-${context.mode=='light'?'dark':'light'}`}
                style={{ width: "80%", margin: "auto" }}
              >
                <img
                  src={res.image}
                  className="card-img-top"
                  alt={res.name}
                  style={{maxHeight:'40vh', width:'auto', margin:'auto'}}
                />
                <div className="card-body">
                  <h5 className="card-title">{res.name}</h5>
                  <p className="card-text">
                    {res.data}
                  </p>
                </div>
              </div>
              </div>
              )
          }
      </LightMode.Consumer>
    </Err>
  );
}

