
import Navbar from '../components/Navbar';
import Image from '../assets/discoverpro.jpg';
import Footer from '../components/Footer';
import Updates from '../components/Update';
import Product1 from '../assets/Product1.jpg'
import Product2 from '../assets/product2.jpg'
import Product3 from '../assets/Product3.jpg'
import { ArrowRight } from 'lucide-react';



const Home = () => {
  return (
    <>
     <Navbar />
     <section
      id="discover-projects"
      className="w-full px-6 md:px-16 py-16 bg-white flex flex-col md:flex-row justify-between items-center gap-10"
    >
      {/* Left Content */}
      <div className="max-w-[691px]">
        <h2 className="text-[48px] font-bold leading-tight text-black mb-6 ">
          DISCOVER AMAZING PRODUCTS
        </h2>

        <p
          className="text-[16px] font-normal text-gray-700 leading-[100%] tracking-tight mb-8"
          style={{ fontFamily: 'Poppins' }}
        >
          Shop the latest trends with unbeatable prices and fast delivery. Your perfect product is
          just a click away.
        </p>

        <button
  className="bg-black text-white text-base rounded-[4px] py-[12px] px-[20px] flex items-center gap-2"
  style={{ fontFamily: 'Poppins' }}
>
  <span>Shop Now</span>
  <ArrowRight size={18} />
</button>
      </div>

      {/* Right Image */}
      <div className="flex justify-center md:justify-end w-full max-w-[800px]">
        <img
          src={Image}
          alt="Discover Projects"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </section>
    <section className="w-full px-4 sm:px-6 md:px-12 py-10">
  {/* Header */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
    <div>
      <h2 className="text-[28px] sm:text-[32px] font-bold text-black font-league">
        NEW PRODUCTS
      </h2>
      <p className="text-[14px] sm:text-[16px] font-poppins text-gray-700 max-w-[600px]">
        Discover our handpicked selection of premium products at unbeatable prices
      </p>
    </div>

    {/* Wrapper for responsiveness */}
<button
  className="bg-black text-white font-semibold px-6 py-3 text-sm sm:text-base rounded hover:underline transition w-full sm:w-auto flex justify-center items-center gap-2"
  type="button"
>
  VIEW ALL
  <ArrowRight size={18} />
</button>


  </div>

  {/* Products Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Product Card 1 */}
    <div className="w-full">
      <img
        src={Product1}
        alt="Classic Everyday Hoodie"
        className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover rounded-md"
      />
      <div className="mt-4 space-y-1">
        <h3 className="text-xl sm:text-2xl font-semibold text-black">
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

    {/* Product Card 2 */}
    <div className="w-full">
      <img
        src={Product2}
        alt="Classic Everyday Hoodie"
        className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover rounded-md"
      />
      <div className="mt-4 space-y-1">
        <h3 className="text-xl sm:text-2xl font-semibold text-black">
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

    {/* Product Card 3 */}
    <div className="w-full">
      <img
        src={Product3}
        alt="Classic Everyday Hoodie"
        className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover rounded-md"
      />
      <div className="mt-4 space-y-1">
        <h3 className="text-xl sm:text-2xl font-semibold text-black">
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
</section>

    <Updates />
    <Footer />
    </>
     
  )
}

export default Home