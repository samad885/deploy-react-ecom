import React from 'react'

const categories = [
  { label: "All Bags", image: "image1.png" },
  { label: "Vanity Pouch", image: "image2.jpg.png" },
  { label: "Tote Bag", image: "image3.png" },
  { label: "Duffle Bag", image: "image4.png" },
  { label: "Laptop Sleeve", image: "image5.png" },
  { label: "Messenger Bags", image: "image6.png" },
  { label: "Slings Bags", image: "image7.png" },
  { label: "Handbags", image: "image8.png" },
];

export default function Bags() {
  return (
    <div className="w-full bg-black py-4">
      <div className="flex overflow-x-auto px-4 gap-6 sm:justify-center scrollbar-hide">
        {categories.map((cat, index) => (
          <div key={index} className="flex-shrink-0 text-center text-white">
            <img
              src={`/${cat.image}`}
              alt={cat.label}
              className="w-14 h-14 mx-auto mb-2"
            />
            <p className="text-sm hover:text-gray-400">{cat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
