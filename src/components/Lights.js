import React from "react";
import Switch from "react-switch";

const Lights = props => {
  return (
    <label className="row">
      <span className="col-md-2 text-center">{props.name}</span>
      <Switch
        checked={props.lights.sampleState[props.number].state.on}
        onChange={() => props.handleChange(props.number)}
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={20}
        width={48}
        className="react-switch col-md-2 "
        id="material-switch"
        disabled={!props.lights.sampleState[props.number].state.reachable}
        //disabled-switch - if not reachable
      />
    </label>
  );
};

export default Lights;
