import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkClass = (path) =>
    `block px-3 py-2 rounded-md text-sm font-medium transition ${
      currentPath === path ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'
    }`;

  return (
    <nav className="w-full px-6 md:px-12 py-4 flex items-center justify-between border-b border-gray-200 bg-white sticky top-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide text-black">
        <Link to="/">SHOPSPHERE</Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <Link to="/" className={linkClass("/")}>HOME</Link>
        <Link to="/products" className={linkClass("/products")}>PRODUCTS</Link>
        <Link to="/support" className={linkClass("/support")}>SUPPORT</Link>
        <Link to="/contact" className={linkClass("/contact")}>CONTACT</Link>

        {/* Shopping Cart visible only on desktop */}
        <Link to="/cart" className="hidden md:block">
          <ShoppingCart className="w-5 h-5 cursor-pointer" />
        </Link>
      </div>

      {/* Mobile Hamburger Menu (no cart icon) */}
      <div className="md:hidden flex items-center gap-4">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-t border-gray-200 shadow-md z-40">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <Link to="/" className={linkClass("/")} onClick={() => setMobileMenuOpen(false)}>HOME</Link>
            <Link to="/products" className={linkClass("/products")} onClick={() => setMobileMenuOpen(false)}>PRODUCTS</Link>
            <Link to="/support" className={linkClass("/support")} onClick={() => setMobileMenuOpen(false)}>SUPPORT</Link>
            <Link to="/contact" className={linkClass("/contact")} onClick={() => setMobileMenuOpen(false)}>CONTACT</Link>
            <Link to="/cart" className={linkClass("/cart")} onClick={() => setMobileMenuOpen(false)}>CART</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
