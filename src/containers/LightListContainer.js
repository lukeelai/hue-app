import React from "react";
import { connect } from "react-redux";

//actions
import { setLightState } from "../actions/lights";

//components
import LightList from "../components/LightList";

class LightListContainer extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.setLightState(e);
  }

  render() {
    return <LightList {...this.props} handleChange={this.handleChange} />;
  }
}

const mapStateToProps = state => {
  return { lights: state.lights };
};

export default connect(
  mapStateToProps,
  { setLightState }
)(LightListContainer);
