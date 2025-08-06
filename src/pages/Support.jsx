
import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Updates from '../components/Update';
import { Package, RotateCw } from 'lucide-react';
import { FaTruck, FaTools, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Support = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: 'HOW LONG DOES SHIPPING TAKE?',
      answer: 'Shipping typically takes 5-7 business days depending on your location.',
    },
    {
      question: 'WHAT IS YOUR RETURN POLICY?',
      answer: 'We accept returns within 30 days of purchase. Items must be unused and in original packaging.',
    },
    {
      question: 'HOW CAN I TRACK MY ORDER?',
      answer: 'You will receive a tracking number via email once your order has shipped.',
    },
    {
      question: 'DO YOU OFFER INTERNATIONAL SHIPPING?',
      answer: 'Yes, we ship to most countries worldwide. Shipping rates may vary.',
    },
    {
      question: 'HOW DO I CHANGE OR CANCEL MY ORDER?',
      answer: 'Contact our support team within 24 hours to change or cancel your order.',
    },
    {
      question: 'WHAT PAYMENT METHOD DO YOU ACCEPT?',
      answer: 'We accept all major credit cards, PayPal, and Apple Pay.',
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
     <Navbar />
     <div className="w-full flex flex-col items-center text-center text-black px-4 md:px-0 mt-10">
        <h2 className="text-3xl md:text-4xl font-league font-bold mb-2">HOW CAN WE HELP YOU?</h2>
        <p className="text-base md:text-lg max-w-xl font-poppins">
          We're here to help with any questions or concerns you may have about your orders, products, or account.
        </p>
      </div>

      {/* Cards Section */}
      <div className="w-full px-4 md:px-10 lg:px-20 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {/* Card Template */}
          {[
            {
              icon: <Package className="w-10 h-10" stroke="white" fill="black" strokeWidth={1.5} />,
              title: 'ORDER STATUS',
              text: 'Track your order',
            },
            {
              icon: <RotateCw className="w-10 h-10" strokeWidth={1.5} />,
              title: 'RETURNS & REFUNDS',
              text: 'Return your order',
            },
            {
              icon: <FaTruck className="w-10 h-10" fill="black" />,
              title: 'SHIPPING INFO',
              text: 'Shipping details',
            },
            {
              icon: <FaTools className="w-10 h-10" />,
              title: 'PRODUCT SUPPORT',
              text: 'Get help with products',
            },
          ].map((card, i) => (
            <div
              key={i}
              className="w-full sm:w-auto min-h-[200px] border border-[#7D7D7D] p-6 flex flex-col items-center text-black space-y-3 rounded-lg"
            >
              {card.icon}
              <h3 className="text-lg font-semibold text-center">{card.title}</h3>
              <p className="text-sm text-center">{card.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full px-4 md:px-10 lg:px-20 py-12 text-black">
        <h2 className="text-2xl md:text-3xl font-bold font-league text-center mb-10">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <div className="space-y-6 max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="w-full">
              <div
                className="flex items-center justify-between text-base md:text-lg font-medium cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <p className="max-w-[90%]">{faq.question}</p>
                {openIndex === index ? (
                  <FaChevronUp className="text-black" />
                ) : (
                  <FaChevronDown className="text-black" />
                )}
              </div>

              <hr className="border-black mt-2" />

              {openIndex === index && (
                <p className="mt-4 text-lg text-gray-800">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
     <Updates />
     <Footer />
    </>
  )
}

export default Support