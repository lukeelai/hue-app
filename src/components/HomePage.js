import React from "react";

//Containers
import LightListContainer from "../containers/LightListContainer";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.getIP = this.getIP.bind(this);
  }

  getIP = () => {
    var os = require("os");
    var networkInterfaces = os.networkInterfaces();
    console.log(networkInterfaces);
  };

  render() {
    return (
      <div>
        <h1>Home</h1>
        <>
          <button onClick={this.getIP}>Click</button>
          <br />
          <LightListContainer />
        </>
      </div>
    );
  }
}

export default HomePage;
