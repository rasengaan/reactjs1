import React from "react";
import Header from "./Header";
import { LightMode } from "../context/context";

export default (props)=>{
    return(
        <div className="container">
          <LightMode.Provider value={{mode:'dark'}}>
            <Header></Header>
          </LightMode>
        </div>
    )
}