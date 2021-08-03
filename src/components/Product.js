import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, useParams } from "react-router-dom";
import { LightMode } from "../context/context";
import { Err } from "../error/Err";

export default ()=> {
  let id = useParams().productId;
  const [res, setres] = useState('')

  const getData=()=>{
    fetch('/data/data.json')
      .then(function(response){
        return response.json();
      })
      .then((data)=> {
        setres(data.data[Number(id.split('.')[0])-1].products[Number(id.split('.')[1])-1]);
      })
      .catch(err=>{
        console.error(err);
      })
  }

  useEffect(()=>{
    getData();
  },[])


if(res===undefined || res===null || res==='')
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
                className={`card p-1 border-${context.mode=='light'?'dark':'light'}`}
                style={{ width: "80%", margin: "auto", backgroundColor:
                context.mode === "dark"
                  ? "rgb(49, 49, 49)"
                  : "#C0C0C0", }}
              >
                <img
                  src={res.image}
                  className="card-img-top"
                  alt={res.name}
                  style={{height:'40vh', width:'auto', margin:'auto'}}
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

