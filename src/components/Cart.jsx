import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [shippingCost] = useState(9.99);
    const navigate = useNavigate();
  
    useEffect(() => {
      fetchCartItems();
    }, []);
  
    const fetchCartItems = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get('http://localhost:3000/cart');
        const items = Array.isArray(res.data) ? res.data : [];
        setCartItems(items);
      } catch (err) {
        setError("Failed to load cart items. Please ensure the server is running.");
        setCartItems([]);
      } finally {
        setLoading(false);
      }
    };
  
    const updateQuantity = async (id, type) => {
      try {
        const itemToUpdate = cartItems.find(item => item.id === id);
        if (!itemToUpdate) return;
  
        const newQuantity = type === "increment" 
          ? itemToUpdate.quantity + 1 
          : itemToUpdate.quantity - 1;
  
        if (newQuantity < 1) return;
  
        await axios.patch(`http://localhost:3000/cart/${id}`, { 
          quantity: newQuantity 
        });
  
        // Optimistic update
        setCartItems(cartItems.map(item => 
          item.id === id ? { ...item, quantity: newQuantity } : item
        ));
      } catch (err) {
        setError("Failed to update quantity.");
      }
    };
  
    const removeItem = async (id) => {
      try {
        await axios.delete(`http://localhost:3000/cart/${id}`);
        setCartItems(cartItems.filter(item => item.id !== id));
      } catch (err) {
        setError("Failed to remove item.");
      }
    };
  
    const handleEdit = (item) => {
      if (!item.type || !item.productId) return;
      navigate(`/product/${item.type}/${item.productId}`, { state: { item } });
    };
  
    if (loading) return <p className="text-center py-10">Loading your cart...</p>;
    if (error) return <p className="text-center text-red-600 py-10">{error}</p>;
  
    const formatPrice = (price) => (typeof price === 'number' ? price.toFixed(2) : '0.00');
  
    // Calculate prices correctly
    const subtotal = cartItems.reduce((sum, item) => {
      const price = item.priceSale || item.price || 0;
      return sum + (price * (item.quantity || 1));
    }, 0);
  
    const tax = subtotal * 0.08;
    const total = subtotal + shippingCost + tax;
  
    const totalSavings = cartItems.reduce((sum, item) => {
      const salePrice = item.priceSale || item.price || 0;
      const originalPrice = salePrice * 1.25; // Assuming 25% discount
      return sum + ((originalPrice - salePrice) * (item.quantity || 1));
    }, 0);
  

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-35">
      <h1 className="text-3xl font-semibold mb-6">
        My Bag <span className="text-lg font-normal">({cartItems.length} items)</span>
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow">
          {cartItems.length === 0 ? (
            <div className="border p-8 text-center">
              <p className="mb-4">Your shopping bag is empty.</p>
              <Link to="/" className="bg-black text-white px-6 py-2 hover:bg-gray-800">Continue Shopping</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="border-b py-6 flex flex-col md:flex-row">
                <div className="md:w-1/4">
                  <img 
                    src={item.mainImage} 
                    alt={item.title } 
                    className="w-32 h-40 object-cover"
                  />
                </div>

                <div className="md:w-2/4 mt-4 md:mt-0">
                  <h3 className="font-medium">{item.title }</h3>
                  <p className="text-sm text-gray-600 mt-1">Size: {item.size}, {item.fit}</p>
                  <p className="text-sm text-gray-600">Color: {item.color }</p>

                  <div className="flex mt-4 items-center">
                    <div className="flex border border-gray-300">
                      <button 
                        onClick={() => updateQuantity(item.id, "decrement")}
                        disabled={item.quantity <= 1}
                        className="px-3 py-1 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                      >−</button>
                      <span className="px-3 py-1 border-l border-r border-gray-300">{item.quantity || 1}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, "increment")}
                        className="px-3 py-1 hover:bg-gray-100"
                      >+</button>
                    </div>

                    <button onClick={() => removeItem(item.id)} className="ml-4 text-blue-600 hover:underline">Remove</button>
                    <button onClick={() => handleEdit(item)} className="ml-4 text-blue-600 hover:underline">Edit</button>
                  </div>

                  <div className="mt-4">
                    <div className="border p-4 mb-2">
                      <label className="flex items-center">
                        <input type="radio" name={`shipping-${item.id}`} className="mr-2" defaultChecked />
                        Ship to Address
                      </label>
                    </div>
                    <div className="border p-4">
                      <label className="flex items-center">
                        <input type="radio" name={`shipping-${item.id}`} className="mr-2" />
                        <div>
                          <div>Pick up · FREE</div>
                          <div className="text-sm text-gray-500">
                            <a href="#" className="text-blue-600 hover:underline">Find a store to see availability</a>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/4 mt-4 md:mt-0 text-right">
                  <p className="font-medium">${formatPrice((item.price || 0) * (item.quantity || 1))}</p>
                  <p className="text-sm text-gray-600">Eddie Bauer: ${(item.price || 1)}</p>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="lg:w-96">
          <div className="border p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">ORDER SUMMARY</h2>
              <a href="#" className="text-blue-600 text-sm hover:underline">HELP</a>
            </div>

            <div className="mb-4 flex justify-between">
              <span>Merchandise Total</span>
              <span>${(subtotal)}</span>
            </div>

            <div className="mb-4 flex justify-between">
              <span>Estimated Tax</span>
              <span>${(tax)}</span>
            </div>

            <div className="mb-4 flex justify-between">
              <span>Estimated Shipping</span>
              <span>${(shippingCost)}</span>
            </div>

            <div className="border-t pt-4 mb-4 flex justify-between font-semibold">
              <span>TOTAL</span>
              <span>${formatPrice(total)}</span>
            </div>

            <div className="text-right text-red-600 mb-6">
              TOTAL SAVINGS: ${formatPrice(totalSavings)}
            </div>

            <button className="w-full bg-black text-white py-3 mb-4 hover:bg-gray-800">
              CHECKOUT NOW
            </button>

            <button className="w-full flex justify-center items-center border py-3 mb-4">
              <span className="ml-2">PayPal Checkout</span>
            </button>

            <div className="text-sm mb-4">
              <p>From $19.08/month, or 4 payments from 0% interest with <span className="text-pink-600 font-medium">Klarna</span>. <a href="#" className="text-blue-600 hover:underline">Learn more</a></p>
            </div>

            <div className="text-sm mt-6">
              <h3 className="font-medium">DISCOUNTS</h3>
              <div className="flex items-center border mt-2">
                <input type="text" placeholder="Promo Code" className="flex-grow p-3 outline-none" />
                <button className="bg-gray-200 text-black px-4 py-3">+</button>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span>Adventure Rewards</span>
                <button className="text-blue-600">Sign In</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
