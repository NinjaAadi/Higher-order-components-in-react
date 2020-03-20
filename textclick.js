import React, { Component } from 'react'
import Aux from'./../hoc/aux';

class Textclick extends Component {

    render() {
        return (
    <button onClick = {this.props.increment}>Clicked {this.props.count}</button>
        )
    }
}

export default Aux(Textclick);