import { useState } from 'react';


const WithCounter = (WrappedComponent) => {
    const UpdatedComponent = (props) => {

        const [count , setCount] = useState(0)
        const IncrementCount = () => {
            setCount(count + 1)
        }
        
        return <WrappedComponent count={count} IncrementCount={IncrementCount} {...props}/>
    }
    return UpdatedComponent
};
 
export default WithCounter;