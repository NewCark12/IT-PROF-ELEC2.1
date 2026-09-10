import { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Runs once after component mounts to simulate API fetch
    const timer = setTimeout(() => {
      setProducts([
        { id: 1, name: 'Mechanical Keyboard', price: 129.99 },
        { id: 2, name: 'Wireless Mouse', price: 49.50 },
        { id: 3, name: 'Desk Mat', price: 19.99 }
      ]);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <h2 style={{ textAlign: 'center' }}>Loading products...</h2>;

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <h1>My Shop</h1>
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          name={product.name} 
          price={product.price} 
        />
      ))}
    </div>
  );
}