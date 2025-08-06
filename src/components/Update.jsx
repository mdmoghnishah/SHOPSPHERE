import React from 'react'

const Updates= () => {
  return (
    <div className="w-full overflow-x-hidden px-4 sm:px-6 md:px-12 lg:px-20 py-12 bg-black">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-league text-white leading-tight">
          STAY UPDATED
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white font-poppins leading-relaxed">
          Subscribe to our newsletter and be the first to know about new <br className="hidden sm:block" />
          products and exclusive deals.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-2">
          <input
            type="email"
            placeholder="Enter your Email ID"
            className="w-full max-w-sm px-4 py-3 border border-[#7D7D7D] rounded-md text-sm placeholder:text-white bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="w-full sm:w-auto px-6 py-3 text-black font-league font-semibold text-base sm:text-lg rounded-md bg-white hover:bg-gray-200 transition">
            SUBSCRIBE NOW
          </button>
        </div>
      </div>
    </div>
  )
}

export default Updates