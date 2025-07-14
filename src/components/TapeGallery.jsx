import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const imageLines = [
  [

    "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    "https://images.unsplash.com/photo-1552083375-1447ce886485",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    // "https://images.unsplash.com/photo-1560347876-aeef00ee58a1",
    // "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    // "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    // "https://images.unsplash.com/photo-1534081333815-ae5019106621"


  ],
  [
    // "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    // "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    // // "https://images.unsplash.com/photo-1534081333815-ae5019106621",
    // "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    "https://images.unsplash.com/photo-1552083375-1447ce886485",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  ],
  [
    // "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    // "https://images.unsplash.com/photo-1552083375-1447ce886485",
    // "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    "https://images.unsplash.com/photo-1560347876-aeef00ee58a1",
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    // "https://images.unsplash.com/photo-1534081333815-ae5019106621",   
  ]
];

const TapeGallery = () => {
  return (
    <div className="w-full min-h-screen bg-[#f2f2f2] flex flex-col justify-center items-center gap-10 py-10 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none grain-overlay"></div>
      {["left", "right", "left"].map((dir, i) => (
        <div className="w-full flex justify-center" key={i}>
          <div
            className={`flex items-center gap-10 min-w-[2500px] py-6 relative whitespace-nowrap ${dir === "left" ? "animate-scroll-left" : "animate-scroll-right"} film-border`}

          >
            {imageLines[i].concat(imageLines[i]).map((img, index) => (
              <div
                key={index}
                className="bg-[#eee] border-[6px] border-dotted border-gray-500 p-2 rounded shadow-lg relative glow-frame"
              >
                <img
                  src={img}
                  alt="film-frame"
                  className="w-72 h-72 object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TapeGallery;