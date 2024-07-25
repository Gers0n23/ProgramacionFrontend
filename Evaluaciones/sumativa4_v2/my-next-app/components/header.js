import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '../hooks/useCart';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <span className="flex items-center">
            <Image src="/assets/inacaplogo2.jpg" alt="INACAPLudi_logo" width={50} height={50} />
            <span className="ml-2">nacap Ludi</span>
          </span>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <button 
                className="flex flex-col items-center"
                onClick={() => setIsLoggedIn(!isLoggedIn)}
              >
                <Image src="/assets/login_user.png" alt="Login" width={50} height={50} />
                <span>{isLoggedIn ? 'Logout' : 'Login'}</span>
              </button>
            </li>
            <li>
              <button 
                className="flex flex-col items-center"
                onClick={() => setShowCart(true)}
              >
                <Image src="/assets/cart-9.png" alt="Cart" width={50} height={50} />
                <span>{totalItems}</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-2">
                <span>{item.title}</span>
                <div>
                  <input 
                    type="number" 
                    min="1" 
                    value={item.quantity} 
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 mr-2 p-1 border rounded"
                  />
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
            <button 
              onClick={() => setShowCart(false)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </header>
  );
}