import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useCart } from '../hooks/useCart';
import ContactForm from '../components/ContactForm';

export default function Home() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <Image src="/assets/Banner.png" alt="INACAPLudi Banner" width={1000} height={210} layout="responsive" />
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Catálogo de Juegos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
                <Image src={`/juegos/${product.image}`} alt={product.title} width={200} height={200} layout="responsive" />
                <h3 className="text-xl font-semibold mt-2">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
                <p className="mt-2">Disponibilidad: {product.availability}</p>
                <p>Ubicación: {product.location}</p>
                <button 
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => addToCart(product)}
                >
                  Agregar al carrito
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}