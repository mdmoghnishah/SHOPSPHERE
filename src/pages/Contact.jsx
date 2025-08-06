import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Updates from '../components/Update';
import { MessageSquare, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <>
    
     <Navbar />
     <section className="w-full bg-white px-4 md:px-12 lg:px-20 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Contact Form */}
        <div>
          <h2 className="font-league-spartan font-bold text-[44px] leading-[100%] tracking-[-0.02em] text-gray-900 mb-6">
  SEND US A MESSAGE
</h2>

          <form className="space-y-5">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {/* First Name Field */}
  <div className="flex flex-col gap-1">
    <label
      htmlFor="firstName"
      className="text-sm font-medium text-gray-800 font-league-spartan"
    >
      First Name
    </label>
    <input
      id="firstName"
      type="text"
      placeholder="First Name"
      className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
    />
  </div>

  {/* Last Name Field */}
  <div className="flex flex-col gap-1">
    <label
      htmlFor="lastName"
      className="text-sm font-medium text-gray-800 font-league-spartan"
    >
      Last Name
    </label>
    <input
      id="lastName"
      type="text"
      placeholder="Last Name"
      className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
    />
  </div>
</div>


            {/* Email */}
            <label
        htmlFor="email"
        className="text-sm font-medium text-gray-800 font-league-spartan"
      >
        Email
      </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />

            {/* Subject */}
            <label
        htmlFor="subject"
        className="text-sm font-medium text-gray-800 font-league-spartan"
      >
        Subject
      </label>
            <select className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black">
              <option value="">Subject</option>
              <option value="Support">Support</option>
              <option value="Sales">Sales</option>
              <option value="General">General</option>
            </select>

            {/* Message */}
            <label
        htmlFor="message"
        className="text-sm font-medium text-gray-800 font-league-spartan"
      >
        Message
      </label>
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>

            {/* Submit Button */}
            <button className="w-full bg-black text-white py-3 rounded font-bold text-sm hover:bg-gray-900 transition">
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div>
          <h2 className="font-league-spartan font-bold text-[44px] leading-[100%] tracking-[-0.02em] text-gray-900 mb-6">
  GET IN TOUCH
</h2>


          <div className="flex flex-col gap-4">
            {/* Contact Support */}
            <div className="border border-gray-300 rounded px-5 py-4 flex justify-between items-center">
              <div className="flex items-start gap-4">
                <MessageSquare className="text-black w-6 h-6" />
                <div>
                 <p className="font-league-spartan font-semibold text-[16px] leading-[100%] tracking-[-0.02em] text-gray-900 uppercase text-center">
  CONTACT SUPPORT
</p>

               <p className="font-poppins font-normal text-[12px] leading-[100%] tracking-[0em] text-gray-500 align-bottom mt-2">
  Available 24/7
</p>

                </div>
              </div>
              <span className="text-xs font-semibold text-gray-500">LIVE CHAT</span>
            </div>

            {/* Phone */}
            <div className="border border-gray-300 rounded px-5 py-4 flex justify-between items-center">
              <div className="flex items-start gap-4">
                <Phone className="text-black w-6 h-6" />
                <div>
                 <p className="font-league-spartan font-semibold text-[16px] leading-[100%] tracking-[-0.02em] text-gray-900 uppercase text-center">
                    (555) 123-4567</p>
               <p className="font-poppins font-normal text-[12px] leading-[100%] tracking-[0em] text-gray-500 align-bottom mt-2">
                    Mon–Fri 9AM–6PM EST</p>
                </div>
              </div>
              <span className="text-xs font-semibold text-gray-500">PHONE</span>
            </div>

            {/* Email */}
            <div className="border border-gray-300 rounded px-5 py-4 flex justify-between items-center">
              <div className="flex items-start gap-4">
                <Mail className="text-black w-6 h-6" />
                <div>
                <p className="font-league-spartan font-semibold text-[16px] leading-[100%] tracking-[-0.02em] text-gray-900 uppercase text-center">
                    SUPPORT@SHOPSPHERE.COM</p>
                <p className="font-poppins font-normal text-[12px] leading-[100%] tracking-[0em] text-gray-500 align-bottom mt-2">
                    Response within 24 hours</p>
                </div>
              </div>
              <span className="text-xs font-semibold text-gray-500">EMAIL</span>
            </div>
          </div>
        </div>
      </div>
    </section>

     <Updates />
      <Footer />
    </>
  )
}

export default Contact