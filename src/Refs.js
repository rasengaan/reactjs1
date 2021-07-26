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

    const textInput = useRef(null);

  let handleClick = () => {
    textInput.current.focus();
  };

  return (
    <div>
      <input type="text" ref={textInput} />
      <input
        type="button"
        value="Focus the text input"
        onClick={handleClick}
      />
    </div>
  );
};
