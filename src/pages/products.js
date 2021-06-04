import React, {useState} from 'react';

function Products() {
  
    const [change, setChange] = useState(false);
  
  
    return (
    <div>
      <img src="data:image/jpeg;base64,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" alt="Mac"/>
        <button onClick={() => setChange(!change)}> Acheter</button>
        <button>Passer</button>

        {change? <h1> buy</h1> : 
        <h1> </h1>}
    
    </div>
  );
}

export default Products;