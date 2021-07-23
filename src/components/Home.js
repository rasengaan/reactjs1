import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { LightMode } from "../context/context";
import * as test from "../data/data.json";
import { Err } from "../error/Err";

export const Home = (props) => {
//   const [category, setcategory] = useState("initialState");

  return (
    <Err>
    <LightMode.Consumer>
      {(context) => (
        <div
          className={`container-flex text-${
            context.mode == "light" ? "dark" : "light"
          } bg-${context.mode}`}
          style={{ minHeight: "93%" }}
        >
          <div className={`row m-0 pt-5`}>
            {test.data.map((res) => {
              return (
                <div
                  className={`mb-3 col-lg-4 col-md-6 col-sm-12 bg-${context.mode} `}
                  style={{ margin: "auto" }}
                >
                  <Link to={`/products/${res.name}`}>
                    <div
                      className={`card bg-${context.mode} text-center p-1 border-${context.mode=='light'?'dark':'light'}`}
                      style={{ width: "80%", margin: "0 auto" }}
                    >
                      <img
                        src={res.img}
                        className="card-img-top"
                        alt={res.name}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{res.name}</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </LightMode.Consumer>
    </Err>
  );
};
