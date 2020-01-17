import React, { useState } from 'react'


function Counter() {
    const [ count, setCount ] = useState(0);

    return (
        <div>
            <p className="m-3">{count}</p>
            <p><button onClick={() => setCount(count + 1)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Add</button>
                <button onClick={() => setCount(count - 1)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Sub</button></p>
        </div>
    )
}

export default Counter