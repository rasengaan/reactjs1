import { useState } from "react";
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";
// import { LightMode } from "./context/context";
// import './App.css';
// import {Home} from "./components/Home";
// import Header from "./components/Header";
import * as product from '../data/data.json';

import { LightMode } from "../context/context";

export default ()=> {
    console.log(useParams().productId, typeof useParams().productId);
  let id = useParams().productId;
  console.log(id);
  console.log(id[0], id[1], id[2], id[3]);
  console.log(id);
  let res = product.data[id[0]-1].products[id[2]-1];


  return (
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
  );
}

