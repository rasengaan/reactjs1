import React from "react";

export class Err extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        console.log("dzsxghn");
    }

    state = {
        error:false,
        errInfo:""
    }

    // static getDerivedStateFromError(error) {
    //     console.log(error)
    //     return { hasError: true };
    //   }

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
        console.log("not showing Err")
        return this.props.children}
    }
}