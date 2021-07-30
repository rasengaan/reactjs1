import React, { useRef } from "react";

export default (props) => {


  return (
    <div>
      <input ref={props.reef} value="Refs in use here!!!"></input>
      <button type="button" value="Focus the text input" onClick={props.click}>Button </button>
    </div>
  );
};
