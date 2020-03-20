import React, { Component } from "react";
import Aux from "./../hoc/aux";

class Buttonclick extends Component {
  render() {
    return <h1 onMouseOver = {this.props.increment}>Hovered {this.props.count} times</h1>;
  }
}

export default Aux(Buttonclick);
