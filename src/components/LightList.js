import React from "react";

//components
import Lights from "./Lights";

const LightList = props => {
  return (
    <div>
      {Object.keys(props.lights.sampleState).map(key => {
        return (
          <Lights
            key={key}
            {...props}
            handleChange={props.handleChange}
            name={props.lights.sampleState[key].name}
            number={key}
          />
        );
      })}
    </div>
  );
};

export default LightList;
