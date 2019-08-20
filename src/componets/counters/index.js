import React from 'react'
import { Counter } from 'componets/counter'


const Counters = () => (
    <div>
        {[0, 0, 0].map((counter) => (
            <Counter counter={counter} />
        ))}
    </div>
)

export default Counters