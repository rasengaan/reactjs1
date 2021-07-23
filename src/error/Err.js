import React from "react";

export class Err extends React.Component{
    constructor(props){
        super(props);
    }

    state = {
        error:false,
        errInfo:""
    }

    componentDidCatch(err, errInfo){
        console.log(err.Error )
        console.log( errInfo)
        this.setState({error:true, errInfo:err.Error});
    }

    render(){
        if(this.state.error){
            console.log("showing error")
            return( 
            <div className="container">
                <div>
                    <img src="https://www.plctr.com/wp-content/uploads/plc-errors.jpg"></img>
                </div>
                <h3>{this.state.errInfo}</h3>
            </div>
        )}
        else{
        return this.props.children}
    }
}