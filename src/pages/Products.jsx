import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { IoMdSearch } from "react-icons/io";
import Product1 from '../assets/Product1.jpg'
import Product2 from '../assets/Product2.jpg'
import Product3 from '../assets/Product3.jpg'
import Update from '../components/Update';
import { useNavigate } from 'react-router-dom';


const Products = () => {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="w-full px-4 sm:px-6 md:px-12 py-10">
        <h2 className="text-[32px] font-bold text-black font-league">OUR PRODUCTS</h2>
        <p className="text-[16px] font-poppins text-gray-700">
          Discover our complete collection of premium products.
        </p>

      </div>
      <div className="w-full px-4 sm:px-6 md:px-12 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <button className="text-[16px] font-poppins font-medium border border-black bg-black text-white rounded-md px-3 py-3">All</button>
          <button className="text-[16px] font-poppins font-medium border border-black rounded-md px-3 py-3">Men</button>
          <button className="text-[16px] font-poppins font-medium border border-black rounded-md px-3 py-3">Women</button>
          <button className="text-[16px] font-poppins font-medium border border-black rounded-md px-3 py-3">Hoodies</button>
          <button className="text-[16px] font-poppins font-medium border border-black rounded-md px-3 py-3">Sweats</button>
          <button className="text-[16px] font-poppins font-medium border border-black rounded-md px-3 py-3">Name (A-Z)</button>
        </div>

        {/* Search Box */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search Products"
            className="border border-[#7D7D7D] rounded-md px-4 py-2 text-sm w-full sm:w-[250px] md:w-[300px] h-[48px] placeholder:text-black"
          />
          <div className='bg-black w-11 h-11 justify-center items-center flex rounded-md'>

            <IoMdSearch className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 md:px-12 mb-20">
        {/* Card 1 */}
        <div
  className="w-full cursor-pointer"
  onClick={() => navigate("/productsitem")}
>
          <img
            src={Product1}
            alt="Classic Everyday Hoodie"
            className="w-full h-auto sm:h-[400px] object-cover rounded-md"
          />
          <div className="mt-4 space-y-1">
            <h3 className="text-2xl font-semibold text-black">
              CLASSIC EVERYDAY HOODIE
            </h3>
            <p className="text-sm text-gray-600">Soft, stylish, and made for comfort.</p>
            <div className="flex items-center text-sm text-gray-600">
              <span className="font-semibold text-black mr-1">4.7</span>
              <span>(412)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-black font-semibold text-base">$449.00</span>
              <span className="line-through text-gray-500 text-sm">$599</span>
            </div>
          </div>
        </div>

        {/* Repeat for Card 2 */}
        <div
  className="w-full cursor-pointer"
  onClick={() => navigate("/productsitem")}
>
          <img
            src={Product2}
            alt="Classic Everyday Hoodie"
            className="w-full h-auto sm:h-[400px] object-cover rounded-md"
          />
          <div className="mt-4 space-y-1">
            <h3 className="text-2xl font-semibold text-black">
              CLASSIC EVERYDAY HOODIE
            </h3>
            <p className="text-sm text-gray-600">Soft, stylish, and made for comfort.</p>
            <div className="flex items-center text-sm text-gray-600">
              <span className="font-semibold text-black mr-1">4.7</span>
              <span>(412)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-black font-semibold text-base">$449.00</span>
              <span className="line-through text-gray-500 text-sm">$599</span>
            </div>
          </div>
        </div>

        {/* Repeat for Card 3 */}
        <div
  className="w-full cursor-pointer"
  onClick={() => navigate("/productsitem")}
>
          <img
            src={Product3}
            alt="Classic Everyday Hoodie"
            className="w-full h-auto sm:h-[400px] object-cover rounded-md"
          />
          <div className="mt-4 space-y-1">
            <h3 className="text-2xl font-semibold text-black">
              CLASSIC EVERYDAY HOODIE
            </h3>
            <p className="text-sm text-gray-600">Soft, stylish, and made for comfort.</p>
            <div className="flex items-center text-sm text-gray-600">
              <span className="font-semibold text-black mr-1">4.7</span>
              <span>(412)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-black font-semibold text-base">$449.00</span>
              <span className="line-through text-gray-500 text-sm">$599</span>
            </div>
          </div>
        </div>

        {/* Card 1 */}
        <div
  className="w-full cursor-pointer"
  onClick={() => navigate("/productsitem")}
>
          <img
            src={Product1}
            alt="Classic Everyday Hoodie"
            className="w-full h-auto sm:h-[400px] object-cover rounded-md"
          />
          <div className="mt-4 space-y-1">
            <h3 className="text-2xl font-semibold text-black">
              CLASSIC EVERYDAY HOODIE
            </h3>
            <p className="text-sm text-gray-600">Soft, stylish, and made for comfort.</p>
            <div className="flex items-center text-sm text-gray-600">
              <span className="font-semibold text-black mr-1">4.7</span>
              <span>(412)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-black font-semibold text-base">$449.00</span>
              <span className="line-through text-gray-500 text-sm">$599</span>
            </div>
          </div>
        </div>

        {/* Repeat for Card 2 */}
        <div
  className="w-full cursor-pointer"
  onClick={() => navigate("/productsitem")}
>
          <img
            src={Product2}
            alt="Classic Everyday Hoodie"
            className="w-full h-auto sm:h-[400px] object-cover rounded-md"
          />
          <div className="mt-4 space-y-1">
            <h3 className="text-2xl font-semibold text-black">
              CLASSIC EVERYDAY HOODIE
            </h3>
            <p className="text-sm text-gray-600">Soft, stylish, and made for comfort.</p>
            <div className="flex items-center text-sm text-gray-600">
              <span className="font-semibold text-black mr-1">4.7</span>
              <span>(412)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-black font-semibold text-base">$449.00</span>
              <span className="line-through text-gray-500 text-sm">$599</span>
            </div>
          </div>
        </div>

        {/* Repeat for Card 3 */}
        <div
  className="w-full cursor-pointer"
  onClick={() => navigate("/productsitem")}
>
          <img
            src={Product3}
            alt="Classic Everyday Hoodie"
            className="w-full h-auto sm:h-[400px] object-cover rounded-md"
          />
          <div className="mt-4 space-y-1">
            <h3 className="text-2xl font-semibold text-black">
              CLASSIC EVERYDAY HOODIE
            </h3>
            <p className="text-sm text-gray-600">Soft, stylish, and made for comfort.</p>
            <div className="flex items-center text-sm text-gray-600">
              <span className="font-semibold text-black mr-1">4.7</span>
              <span>(412)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-black font-semibold text-base">$449.00</span>
              <span className="line-through text-gray-500 text-sm">$599</span>
            </div>
          </div>
        </div>
      </div>

      <Update />
      <Footer />
    </>
  )
}

export default Products