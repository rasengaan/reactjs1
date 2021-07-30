import React from "react";
import Home from "./Home";
import { FontColorContext } from "./context";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        color:'black',
    };
    this.setColor = this.setColor.bind(this);
  }
  setColor(color){
      this.setState({color:color})
  }
  render() {
    return (
      <FontColorContext.Provider value={{ color: this.state.color }}>
        <h3>these button decide the context</h3>
        <br/>
        <span>
          <button className="btn-sm" onClick={() => this.setColor("red")}>
            red
          </button>
        </span>
        <span>
          <button className="btn-sm" onClick={() => this.setColor("green")}>
            green
          </button>
        </span>
        <span>
          <button className="btn-sm" onClick={() => this.setColor("blue")}>
            blue
          </button>
        </span>
        <span>
          <button className="btn-sm" onClick={() => this.setColor("yellow")}>
            yellow
          </button>
        </span>
        <Home />
      </FontColorContext.Provider>
    );
  }
}
