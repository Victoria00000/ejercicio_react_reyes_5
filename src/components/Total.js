import { useState } from 'react';

function Total() {
    const [elTotal, setElTotal] = useState(0);
    return (
        <h2>Total a pagar: ${elTotal}</h2>
    )
};

export { Total };