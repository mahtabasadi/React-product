import React, { useEffect, useState } from 'react';


const FunctionalCounter = () => {

    const [name , setName] = useState('')
    const [count , setCount] = useState(0)

    useEffect(()=> {
        console.log('document title updating');
        document.title = `title ${this.state.count} times`
    },[count])

    return ( 
        <div>
            <input  
                type='text' 
                placeholder='name' 
                value={name} 
                onChange={(e)=>setName(e.target.value)}
            />
            <button 
                onClick={() => setCount(count + 1)}>
                count: {count}
            </button>
        </div>
    );
}
 
export default FunctionalCounter ;




// import React, { Component, useState } from 'react';


// class ClassCounter extends Component {
//     state = { 
//         name:'' ,
//         count:0
//      } 

//      componentDidMount() {
//          document.title = `title ${this.state.count} times`
//      }
     
//      componentDidUpdate(prevProps, prevState) {
//         if (prevState.count !== this.state.count) {
//             console.log('document title updating');
//             document.title = `title ${this.state.count} times`
//         }
//      }

//     render() { 
//         return (
//             <div>
//                 <input  type='text' placeholder='name' value={this.state.name} onChange={(e)=>this.setState({name: e.target.value})}/>
//                 <button onClick={() => this.setState({count:this.state.count + 1})}>count: {this.state.count}</button>

//             </div>
//         );
//     }
// }
 
// export default ClassCounter;