import {useState} from 'react';
const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
        <p>The counter it's in: {count}</p>
        <button onClick={()=>setCount(count+1)}>Add</button>
        <button onClick={()=>setCount(count-1)}>Subsctract</button>
        </div>
    );
}

export default Counter;