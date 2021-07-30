import React, { useState, useEffect } from "react";
import { P2 } from "./P2";
import { Err } from "./Err";

export const P1 = (props) => {
  const [count, setcount] = useState(0);
  const [test, settest] = useState(0);
  const [errP2, seterrP2] = useState(false);

  let testRef = React.createRef();

  useEffect(() => {
    console.log("Updating Count variables");
    console.log(testRef);
    // testRef?.current?.scrollHeight=800
  }, [count, test]);

  let test2 = {
    key:78652463636,
  };

  // contextType = FontColorContext;

  if (props.errP1) throw new Error("Threw Err from P1.");
  else
    return (
      <div className=" p-2" style={{ border: "1px solid green" }}>
        P1 Component
        <h2
          ref={testRef}
          onClick={() => {
            settest(test + 1);
          }}
          onDoubleClick={() => {
            settest(test + 5);
          }}
        >
          P1 running!! State: ClickCount test: {test}
        </h2>
        <h2
          onClick={() => {
            setcount(count + 1);
          }}
          onDoubleClick={() => {
            setcount(count + 5);
          }}
        >
          P1 running!! State: ClickCount count: {count}
        </h2>
        <button onClick={() => seterrP2(true)}>Throw Err in P2</button>
        <Err>
          <P2 test={test2} errP2={errP2} />
        </Err>
      </div>
    );
};
