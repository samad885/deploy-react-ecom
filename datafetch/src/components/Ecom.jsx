import { useEffect, useState } from "react";
import { FiShoppingBag, FiBookmark, FiPlus } from "react-icons/fi";
import axios from "axios";

export default function Ecom() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white h-[500px] border rounded-lg shadow-md p-4 flex flex-col hover:shadow-xl transition relative overflow-hidden"
          >
            <FiBookmark className="absolute top-4 right-4 text-2xl cursor-pointer" />
            <img
              src={product.image}
              alt={product.title}
              className="h-64 object-contain mb-4"
            />
            <div className="footer absolute bottom-0 bg-black w-full h-[150px] left-0 flex items-center justify-between px-4">
              <div>
                <h2 className="text-white">{product.title}</h2>
                <p className="text-xl font-bold text-white">
                  ₹{Math.floor(product.price * 82)}
                </p>
                <p className="text-green-600 font-medium text-sm">(50% Off)</p>
              </div>
              <button className="relative w-8 h-8 text-neutral-200 flex items-center justify-center">
                <FiShoppingBag className="w-6 h-6" />
                <FiPlus className="absolute top-5 right-0 w-4 h-4 bg-black rounded-full" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
