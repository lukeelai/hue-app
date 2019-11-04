import React from "react";
import { connect } from "react-redux";
import Switch from "react-switch";

//actions
import { setLightState } from "../actions/lights";

class Lights extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.setLightState();
  }

  render() {
    return (
      <label>
        <span>Light 1</span>
        <Switch
          checked={this.props.lights.checked}
          onChange={this.handleChange}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          className="react-switch"
          id="material-switch"
        />
      </label>
    );
  }
}

const mapStateToProps = state => {
  return { lights: state.lights };
};

export default connect(
  mapStateToProps,
  { setLightState }
)(Lights);
