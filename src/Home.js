import React, { useState } from "react";
import { P1 } from "./P1";
import {Err} from './Err';

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            text:"initially loaded.",
            style:{},
            errP1:false
        }
        this.err = this.err.bind(this);
    }

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
                </Err>
            </div>
        );
    }
}