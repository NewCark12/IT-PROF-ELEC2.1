import { useState } from 'react';

export default function ProductCard({ name, price }) {
  // Internal state for the quantity counter
  const [quantity, setQuantity] = useState(0);

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem', borderRadius: '8px' }}>
      <h2>{name}</h2>
      <p>${price.toFixed(2)}</p>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button onClick={() => setQuantity(q => Math.max(0, q - 1))}> - </button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(q => q + 1)}> + </button>
      </div>
    </div>
  );
}