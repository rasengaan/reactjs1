import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { LightMode } from "../context/context";
// import * as test from "../data/data.json";
import { Err } from "../error/Err";

export const Home = (props) => {
  const [categories, setcategories] = useState(null);

  const getData = () => {
    fetch("/data/data.json")
      .then((response)=> {
        return response.json();
      })
      .then((data) => {
        setcategories(data.data);
      })
      .catch((err) => {
        setcategories(null)
        console.error(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

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
            {categories?.map((res) => {
              return (
                <div
                  className={`mb-5 col-lg-4 col-md-6 col-sm-12 bg-${context.mode} mt-0`}
                  style={{ margin: "auto" }}
                >
                  <Link to={`/products/${res.category}`}>
                    <div
                      className={`card  text-center p-1 border-${context.mode=='light'?'dark':'light'} h-100`}
                      style={{ width: "80%", margin: "0 auto",backgroundColor:
                      context.mode === "dark"
                        ? "rgb(49, 49, 49)"
                        : "#C0C0C0" }}
                    >
                      <div style={{height:"30vh",
  display: 'flex',
  justifyContent:' center'}}>
                        <img
                          src={res.img}
                          className="card-img"
                          alt={res.name}
                          style={{
                            maxHeight: "100%",
                            width: "auto",
                            maxWidth: "100%",
                            margin: "auto",
                          }}
                        />
                        </div>
                      <div className="card-body">
                        <h5 className="card-title">{res.name}</h5>
                        <p className="card-text">
                          {res.info}
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
