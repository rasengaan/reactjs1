import react, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, useParams, Link} from "react-router-dom";
import { LightMode } from "../context/context";
import * as product from '../data/data.json';

export default ()=> {

    // let data=product;

    let id = useParams().categoryName[8];
    console.log(id);
    let data = product.data[id-1];
    console.log(data);

  return (
      <LightMode.Consumer>
          {
              context=>(
        <div className={`row pt-4 bg-${context.mode} text-${context.mode=='light'?'dark':'light'} m-0 pl-2`} style={{minHeight:'93%'}}>
            {/* <h1>category </h1> */}
            { 
                data.products.map((res)=>{
                    return(
                        <div
                        className={`mb-3 col-lg-4 col-md-6 col-sm-12 bg -${context.mode} `}
                        style={{ margin: "auto" }}
                      >
                        <Link to={`/product/${res.id}`}>
                          <div
                            className={`card bg-${context.mode}`}
                            style={{ width: "80%", margin: "auto", height:'100%' }}
                          >
                            <img
                              src={res.image}
                              className="card-img-top"
                              alt={res.name}
                              style={{maxHeight:'30vh', width:'auto',maxWidth:'100%', margin:'auto'}}
                            />
                            <div className="card-body">
                              <h5 className="card-title">{res.name}</h5>
                              <p className="card-text">
                                {res.data}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    )
                })
            }
        </div>
              )
          }
      </LightMode.Consumer>
  );
}