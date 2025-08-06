
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React, { useState } from "react";
import leftPic from "../assets/leftpic.jpg";
import { Minus, Plus, ShoppingCart, Star, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";


const Productitem = () => {
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();


  return (
    <>
    <Navbar />
     <section className="w-full flex flex-col lg:flex-row items-start justify-center bg-gray-50 py-10 px-4 md:px-10 gap-10">
      {/* Left Side: Back Button + Image */}
      <div className="flex flex-col items-start w-full max-w-[474px]">
        {/* BACK Button */}
        <button
      className="flex items-center text-[#7d7d7d] font-medium text-[16px] mb-4"
      onClick={() => navigate("/products")} // 3. navigate on click
    >
      <ChevronLeft size={18} className="mr-1" />
      BACK
    </button>

        {/* Image */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full h-auto">
          <img
            src={leftPic}
            alt="Showcase Visual"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>

      {/* Right Side: Product Details */}
      <div className="w-full max-w-[700px] flex flex-col gap-6 mt-12">
        {/* Tags + Title */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Tags */}
          <div className="flex flex-nowrap gap-2">
            {["In stock", "Hoodie", "Men"].map((tag, index) => {
              const tagWidths = [85, 85, 58];
              return (
                <span
                  key={index}
                  className="font-poppins font-normal text-[16px] leading-[100%] text-gray-700 rounded-[4px] whitespace-nowrap"
                  style={{
                    width: `${tagWidths[index]}px`,
                    height: "48px",
                    padding: "12px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #7D7D7D",
                  }}
                >
                  {tag}
                </span>
              );
            })}
          </div>

          {/* Title */}
          <h1 className="font-league-spartan font-bold text-[44px] leading-[64px] tracking-[-0.02em] uppercase text-[#111] ">
            CLASSIC EVERYDAY HOODIE
          </h1>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 ">
          <div className="flex gap-[4px]">
            {Array(5)
              .fill()
              .map((_, i) => (
                <Star
                  key={i}
                  style={{
                    width: "28.54px",
                    height: "27.26px",
                    color: "#1B1B1B",
                    fill: "#1B1B1B",
                    opacity: 1,
                  }}
                />
              ))}
          </div>
          <span className="font-league-spartan font-semibold text-[24px] leading-[24px] tracking-[-0.02em] uppercase text-gray-800 align-bottom">
            4.7
          </span>
          <span className="text-gray-400 text-sm">(412 reviews)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-4">
          <span className="text-2xl md:text-3xl font-bold text-[#111]">
            $449.00
          </span>
          <span className="text-xl md:text-2xl text-gray-400 line-through">
            $549.00
          </span>
        </div>

        <hr className="border-black-300" />

        {/* Description */}
        <div>
          <h3 className="font-league-spartan font-semibold text-[25px] leading-[28px] tracking-[-0.02em] uppercase text-gray-800 mb-1">
            DESCRIPTION
          </h3>
          <p className="text-black text-sm leading-relaxed">
            Comfortable organic cotton hoodie perfect for everyday wear.
          </p>
        </div>

        {/* Features */}
        <div>
          <h3 className="font-bold text-gray-800 mb-1">FEATURES</h3>
          <ul className="list-disc list-inside text-black text-sm space-y-1">
            <li>100% organic cotton</li>
            <li>Sustainable production</li>
            <li>Soft fabric</li>
            <li>Various colors</li>
          </ul>
        </div>

        <hr className="border-black-300" />

        {/* Quantity */}
        <div className="flex items-center justify-start gap-4">
          <h3 className="font-league-spartan font-semibold text-[28px] leading-[100%] tracking-[-0.02em] uppercase text-[#1B1B1B]">
            QUANTITY:
          </h3>

          <div className="w-[110px] h-[48px] px-3 py-3 border border-[#7D7D7D] rounded-[4px] flex items-center justify-between">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="text-[#111]"
            >
              <Minus size={18} />
            </button>
            <span className="text-base font-semibold text-[#111]">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="text-[#111]"
            >
              <Plus size={18} />
            </button>
          </div>
        </div>

        <hr className="border-black-300" />

        {/* Add to Cart */}
        <button
          className="w-full max-w-[774px] h-[48px] bg-black text-white rounded-[4px] px-5 py-3 flex items-center justify-center gap-2 hover:bg-gray-900 transition
             font-league-spartan font-bold text-[20px] leading-[100%] tracking-[-0.02em] uppercase"
        >
          <ShoppingCart size={20} color="#fff" />
          ADD TO CART - ${(quantity * 499).toFixed(2)}
        </button>
      </div>
    </section>

    <Footer />
    </>
  )
}

export default Productitem