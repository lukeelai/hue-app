import React from "react";
import { Switch, Tooltip, Slider, withStyles } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";

const PrettoSlider = withStyles({
  root: {
    color: "#00000000",
    height: 5,
    background: "linear-gradient(to right, #ebd234, #fff)"
  },
  thumb: {
    height: 30,
    width: 30,
    backgroundColor: "white",
    border: "2px solid black",
    marginTop: -12,
    marginLeft: -12,
    "&:focus,&:hover,&$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
    marginLeft: 6,
    color: "black"
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider);

const Lights = props => {
  return (
    <div className="container-fluid" style={{ marginLeft: "500px" }}>
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
      <span className="col-md-2 text-center">
        <PrettoSlider
          valueLabelDisplay="auto"
          aria-label="pretto slider"
          defaultValue={0}
          className="col-md-2"
        />
      </span>
    </div>
  );
};

export default Lights;
