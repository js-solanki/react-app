
import { useState } from 'react';


function Counter() {
    const [count, setCount] = useState(0);
    const updateCount = function (decrement = false) {
        decrement ? (count > 0 && setCount(count - 1)) : setCount(count + 1);
    }

    return (
        <div className='container' >
            <h4>count is {count} </h4>
            <button className='btn btn-primary mr-16' onClick={() => updateCount()}>
                increment
            </button>
            <button className='btn btn-primary' onClick={() => updateCount(true)}>
                decrement
            </button>
        </div>
    );

}

export default Counter;