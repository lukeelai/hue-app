import React from "react";

//components
import Lights from "./Lights";

const LightList = props => {
  return (
    <div>
      {Object.keys(props.lights.sampleState).map(key => {
        return (
          <Lights
            {...props}
            handleChange={props.handleChange}
            key={key}
            number={key}
          />
        );
      })}
    </div>
  );
};

export default LightList;
