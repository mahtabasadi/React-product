import { useEffect, useState } from 'react';

const FunctionalTimer = () => {
    const[count,setcount] = useState(0)

    useEffect(()=>{
        const interval = setInterval(()=>{
            console.log('componentDidmount Clicked');
            setcount(count + 1)
        },1000)
        return ()=>{
            clearInterval(interval)
        }
    },[])

    return <div>class interval</div>;
}
 
export default FunctionalTimer;