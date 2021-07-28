import React, { useRef } from "react";

// export default (props)=>{
//     let a =[];
//     a.push

//     return(
//         <div className="container">
//             <input  />
//         </div>
//     )

// }

export default (props) => {


  return (
    <div>
      <button ref={props.reef}>button</button>
      <input type="button" value="Focus the text input" onClick={props.click} />
    </div>
  );
};
