import React from "react";
import Switch from "@material-ui/core/Switch";
const Lights = props => {
  return (
    <label className="row">
      <span className="col-md-2 text-center">{props.name}</span>
      <Switch
        className="react-switch"
        checked={props.lights.sampleState[props.number].state.on}
        onChange={() => props.handleChange(props.number)}
        value={props.name}
        color="primary"
        inputProps={{ "aria-label": "primary checkbox" }}
        disabled={!props.lights.sampleState[props.number].state.reachable}
      />
    </label>
  );
};

export default Lights;
