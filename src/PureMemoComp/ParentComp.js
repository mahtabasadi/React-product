import React, { Component } from "react";
// import ClassRef from '../Components/ref/ClassRef'
import UseRef from '../Components/ref/UseRef'
// import FunctionalRef from "../Components/ref/FunctionalRef";
// import RegComp from "./RegComp";
// import PureComp from './PureComp'
// import MemoComp from './MemoComp'

class ParentComp extends Component {
  state = { name: "mahtab" };

    componentDidMount() {
        // setInterval(() => {
        //     this.setState({name: 'mahtab'})   
        // }, 1000);
    }

  render() {
    console.log('parent comp ..............................................');
    return (
      <div>
        <UseRef/>
        {/* <RegComp name={this.state.name}/> */}
        {/* <FunctionalRef /> */}
        {/* <MemoComp name={this.state.name}/> */}
        {/* <PureComp name={this.state.name}/> */}
      </div>
    );
  }
}

export default ParentComp;
