import React,{Component} from 'react'
import { render } from '@testing-library/react';
import { tsThisType } from '@babel/types';

const Aux = (OldComponent) => {
    class Newcomponent extends Component{
            constructor(props){
                super(props);
                this.state = {
                    count : 0
                }
                this.Increment = this.Increment.bind(this);
            }
        Increment = () =>{
            let c = this.state.count + 1;
                this.setState({count:c});
            }
    render(){
        return <OldComponent count = {this.state.count} increment = {this.Increment}/>
    }
   
}
 return Newcomponent;
}

export default Aux
