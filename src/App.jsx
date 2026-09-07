import ProductCard from './components/ProductCard';

// Dummy product data
const DUMMY_PRODUCTS = [
  { id: 1, name: 'Mechanical Keyboard', price: 129.99 },
  { id: 2, name: 'Wireless Mouse', price: 49.50 },
  { id: 3, name: 'Desk Mat', price: 19.99 }
];

export default function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <h1>My Shop</h1>
      
      {DUMMY_PRODUCTS.map((product) => (
        <ProductCard 
          key={product.id} 
          name={product.name} 
          price={product.price} 
        />
      ))}
    </div>
  );
}