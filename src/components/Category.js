import { useState, useEffect } from "react";
import {
  useParams,
  Link,
} from "react-router-dom";
import { LightMode } from "../context/context";
import { Err } from "../error/Err";

export default () => {

  const [data, setData] = useState("");
  let id = useParams().categoryName;

  const getData = () => {
    fetch("/data/data.json")
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        setData(data.data[Number(id.split("y")[1]) - 1]);
      })
      .catch((err) => {
        setData(null)
        console.error(err);
      });
  };

  useEffect(() => {
    getData();
  }, [id]);


  if (data === undefined || data === null) {
    return (
      <LightMode.Consumer>
        {(context) => (
          <div
            className={`container-flex pt-4 bg-${context.mode} text-center text-danger m-0 pl-2`}
            style={{ minHeight: "93%" }}
          >
            <h1 style={{ fontSize: "calc(1rem + 1vw)" }}>INVALID CATEGORY!</h1>
          </div>
        )}
      </LightMode.Consumer>
    );
  } else
    return (
      <Err>
        <LightMode.Consumer>
          {(context) => (
            <div
              className={`row pt-4 bg-${context.mode} text-center text-${
                context.mode == "light" ? "dark" : "light"
              } m-0 pl-2`}
              style={{
                minHeight: "93%",
              }}
            >
              {data.products?.map((res) => {
                return (
                  <div
                    className={`
                    mb-5 
                    mt-0
                    col-lg-4 
                    col-md-6 
                    col-sm-12 
                    bg -${context.mode} 
                    border-${context.mode == "light" ? "dark" : "light"}
                    `}
                    style={{
                      margin: "auto",
                    }}
                  >
                    <Link to={`/product/${res.id}`}>
                      <div
                        className={`card  p-2 border-${
                          context.mode == "light" ? "dark" : "light"
                        } h-100`}
                        style={{
                          width: "80%",
                          margin: "auto",
                          height: "100%",
                          backgroundColor:
                            context.mode === "dark"
                              ? "rgb(49, 49, 49)"
                              : "#C0C0C0",
                        }}
                      >
                        <div style={{height:"30vh",
  display: 'flex',
  justifyContent:' center'}}>
                        <img
                          src={res.image}
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
                          <p className="card-text">{res.data}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </LightMode.Consumer>
      </Err>
    );
};
