import React from 'react'
import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#f4f4f4] text-black text-sm w-full">
      <div className="max-w-[1440px]  mx-auto px-6 md:px-16 py-10 flex flex-col md:flex-row justify-between gap-10">
        {/* Left Half */}
        <div className="w-full mt-10 md:w-1/2 px-10">
          {/* SHOPSPHERE and paragraph side by side */}
          <div className="flex items-start gap-3 flex-wrap">
            <h2 className="text-[31px] font-bold  whitespace-nowrap">SHOPSPHERE</h2>
            <p className="text-sm font-normal text-left text-gray-700 max-w-[270px]">
              Your trusted destination for quality products and exceptional service.
            </p>
          </div>

          {/* Email input and button */}
          <div className="flex items-center mt-4 gap-2 max-w-md">
            <input
              type="email"
              placeholder="Enter your Email ID"
              className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none w-full"
            />
            <button className="bg-black font-bold  font-league-spartan text-white px-4 py-2 rounded-md whitespace-nowrap">
              SUBSCRIBE NOW
            </button>
          </div>
        </div>



        {/* Right Half */}
        <div className="w-full m-10  md:w-1/2  flex flex-col sm:flex-row justify-between gap-6">
          {/* Quick Links */}
          <div >
            <h3 className="font-bold text-base mb-2">QUICK LINKS</h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                <Link to="/products" className="hover:underline">Products</Link>
              </li>
              <li>
                <Link to="/cart" className="hover:underline">Cart</Link>
              </li>
              <li>
                <Link to="/support" className="hover:underline">Support</Link>
              </li>
            </ul>
          </div>


          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-base  mb-2">CONTACT US</h3>
            <div className="flex items-center gap-2 text-gray-700 mb-3">
              <Phone size={16} />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Mail size={16} />
              <span>support@shopsphere.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer