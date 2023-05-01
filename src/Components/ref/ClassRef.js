import React, { Component, createRef } from 'react';


class ClassRef extends Component {
    constructor(props){
        super(props)
        this.InputRef = createRef()
    }
    componentDidMount() {
        this.InputRef.current.focus()
    }
    render() { 
        return (
            <div>
                <input type='text' ref={this.InputRef}/>
                <button>Reset</button>
            </div>
        );
    }
}
 
export default ClassRef;



