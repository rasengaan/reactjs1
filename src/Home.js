import React, { useState, useRef } from "react";
import { P1 } from "./P1";
import {Err} from './Err';
import Refs from './Refs';
import HOC from "./HOC";
import List1 from "./List1";
import List2 from "./List2";

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            text:"initially loaded.",
            style:{},
            errP1:false
        }
        this.err = this.err.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    dat =['a','b','c','d','e','f'];
    ListHoc1 = HOC(List1,this.dat);
    textInput = React.createRef()
    componentDidUpdate(){
        // console.log(this.state)
    }
    err(){
        this.setState((state,props)=>({
            errP1:true
        }))
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({style:{color:"red",backgroundColor:'rgb(57, 250, 32)'} ,text:"Content Changed after 5000ms."});
        }, 5000);
    }
    handleClick = () => {
        // this.textInput.current.
        this.textInput.current.focus();
      };
    ListHoc2 = HOC(List2,['g','h','i','j','k','l']);
    render(){
        return(
            <div className="container pb-2 text-white" style={{border:'1px solid red'}}>
                Home Component
                <br/>
                <h1>App Online!!!! <span style={this.state.style}>{this.state.text}</span></h1>
                <br/>
                <button onClick={()=>this.err()}>Throw Err in P1</button>
                <Err>
                    <P1 className="mb-3" errP1={this.state.errP1}/>
                    <Refs reef={this.textInput} click={this.handleClick}></Refs>
                </Err>
                <div className="row mt-2 mb-2"><p>The following lists are made using Higher Order Component</p></div>
                <div className="row">
                    <div className="col-6"><this.ListHoc1></this.ListHoc1></div>
                    <div className="col-6"><this.ListHoc2></this.ListHoc2></div>
                </div>
            </div>
        );
    }
}