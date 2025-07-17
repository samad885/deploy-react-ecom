
import { useState } from "react";
import { FiSearch, FiUser, FiBookmark, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-black text-white px-4 sm:px-8 py-3">
      <div className="flex items-center justify-between">
        
        <div className="text-2xl tracking-widest font-light">TANN TRIM</div>

        
        <div className="hidden lg:flex items-center gap-6 ml-10">
          <ul className="flex gap-6 text-sm font-light">
            {["Bags", "Travel", "Accessories", "Gifting", "Jewelry"].map((item) => (
              <li key={item} className="cursor-pointer hover:text-gray-400 transition">{item}</li>
            ))}
          </ul>
        </div>

       
        <div className="lg:hidden flex items-center gap-4 text-xl">
          <button onClick={toggleMobileMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
          <FiSearch className="cursor-pointer hover:text-gray-400" />
          <FiUser className="cursor-pointer hover:text-gray-400" />
          <FiBookmark className="cursor-pointer hover:text-gray-400" />
          <FiShoppingBag className="cursor-pointer hover:text-gray-400" />
        </div>
      </div>

      
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black text-white mt-2 px-4 py-2">
          <ul className="flex flex-col gap-4 text-sm font-light">
            {["Bags", "Travel", "Accessories", "Gifting", "Jewelry"].map((item) => (
              <li key={item} className="cursor-pointer hover:text-gray-400 transition">{item}</li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
