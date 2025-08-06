import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import { Trash2, Minus, Plus } from "lucide-react";

const cartItems = [
  {
    id: 1,
    name: "Classic Everyday Hoodie",
    price: 499.0,
    sku: "#2938456234875",
    mrp: 599.0,
    quantity: 1,
    total: 499.0,
    color: "White",
    image: product1,
  },
  {
    id: 2,
    name: "Classic Everyday Hoodie",
    price: 499.0,
    sku: "#2938456234875",
    mrp: 599.0,
    quantity: 1,
    total: 499.0,
    color: "White",
    image: product2,
  },
  {
    id: 3,
    name: "Classic Everyday Hoodie",
    price: 499.0,
    sku: "#2938456234875",
    mrp: 599.0,
    quantity: 1,
    total: 499.0,
    color: "White",
    image: product3,
  },
];

const Cart = () => {
  return (
    <>
      <Navbar />
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>

        {/* Table headers */}
        <div className="hidden sm:grid grid-cols-5 gap-4 text-sm font-semibold text-gray-600 mb-4 border-b pb-2">
          <div className="col-span-2">PRODUCT</div>
          <div>NET PRICE</div>
          <div>QUANTITY</div>
          <div>TOTAL</div>
        </div>

        {/* Cart items */}
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid sm:grid-cols-5 gap-4 border p-4 rounded-md shadow-sm"
            >
              {/* Product details */}
              <div className="sm:col-span-2 flex gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded object-cover border"
                />
                <div className="text-sm text-gray-800">
                  <p className="font-bold">{item.name}</p>
                  {/* <p className="text-gray-500 font-bold ">${item.price.toFixed(2)}</p> */}
                  <p className="text-gray-500">{item.sku}</p>
                  <p className="text-gray-500 line-through">${item.mrp}</p>
                  <p className="text-gray-500">Colour: {item.color}</p>
                </div>
              </div>

              {/* Net price */}
              <div className="text-sm flex items-center sm:justify-start justify-between">
                <span className="block sm:hidden font-semibold text-gray-500">NET PRICE: </span>
                ${item.price.toFixed(2)}
              </div>

              {/* Quantity control */}
              <div className="text-sm flex items-center gap-2">
                <button className="border rounded-full p-1 hover:bg-gray-200">
                  <Minus size={16} />
                </button>
                <span>{item.quantity}</span>
                <button className="border rounded-full p-1 hover:bg-gray-200">
                  <Plus size={16} />
                </button>
              </div>

              {/* Total and delete */}
              <div className="text-sm flex items-center">
                ${item.total.toFixed(2)}
                <div className="ml-auto">
                  <button className="hover:text-red-600">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continue Shopping Button */}
        <div className="flex justify-end mt-10">
          <button
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
            type="button"
          >
            CONTINUE SHOPPING
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cart;
