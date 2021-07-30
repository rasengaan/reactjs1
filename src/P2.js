import React, { useState } from "react";
import PropTypes from "prop-types";
// import Home from './Home';
import { FontColorContext } from "./context";

export const P2 = (props) => {
  console.log(props);

  if (props.errP2) {
    throw new Error("Throwing new Error from P2!");
  } else
    return (
      <div style={{ border: "1px solid yellow" }} className="p-1">
        <FontColorContext.Consumer>
          {(fontColor) => (
            <div>
              <h2 style={{ color: fontColor.color }}>
                P2 Receiving Props!
                <br />
                Prop: {props.test.key}
                PropType: {typeof props.test.key}
              </h2>
              <span style={{ color: fontColor.color }}>
                Change color using top buttons
              </span>
            </div>
          )}
        </FontColorContext.Consumer>
      </div>
    );
};

P2.propTypes = {
  test: PropTypes.exact({
    key: PropTypes.string,
  }),
};

P2.defaultProps = {
  test: {
    key: "Default Prop",
  },
};
