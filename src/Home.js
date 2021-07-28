import React, { useState, useRef } from "react";
import { P1 } from "./P1";
import {Err} from './Err';
import Refs from './Refs';

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

    textInput = React.createRef()

    componentDidUpdate(){
        console.log(this.state)
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
        this.textInput.current.focus();
      };

    render(){
        return(
            <div className="container pb-2 text-white" style={{border:'1px solid red'}}>
                Home Component
                <br/>
                <h1>App Online!!!! <span style={this.state.style}>{this.state.text}</span></h1>
                <br/>
                <button onClick={()=>this.err()}>Throw Err in P1</button>
                <Err>
                    <P1 errP1={this.state.errP1}/>
                    <p className="m-3">Refs in use</p>
                    <Refs reef={this.textInput} click={this.handleClick}></Refs>
                    <Refs reef={this.textInput} click={this.handleClick}></Refs>
                    <Refs reef={this.textInput} click={this.handleClick}></Refs>
                    <Refs reef={this.textInput} click={this.handleClick}></Refs>
                </Err>

            </div>
        );
    }
}