import React from "react";
import { Switch, Tooltip } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";

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
      <Tooltip title="Unreachable" placement="right">
        <ErrorIcon
          color="error"
          fontSize="small"
          hidden={props.lights.sampleState[props.number].state.reachable}
        />
      </Tooltip>
    </label>
  );
};

export default Lights;
