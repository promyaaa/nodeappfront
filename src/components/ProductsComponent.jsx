import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductHeader from "./ProductHeader";


const ProductsComponent = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://express-server-xi-one.vercel.app/api/products")
      .then((res) => {
        setProducts(res.data)
        setIsLoading(false)
      }) // Success or No Error
      .catch((err) => {
        console.log(err.message)
        setIsLoading(false)
      }); // Fail or Error
  }, []);

  return (
    <div>
      <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
        <div className="mx-auto max-w-6xl px-4 2xl:px-0">
          {/* Heading & Filters */}
          <ProductHeader />
          {/* Product listing with card start */}
          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

          { isLoading && 
            <div className="flex items-center justify-center h-screen">
              <span className="loading loading-ball loading-xs"></span>
              <span className="loading loading-ball loading-sm"></span>
              <span className="loading loading-ball loading-md"></span>
              <span className="loading loading-ball loading-lg"></span>
            </div>
          }

        </div>
      </section>
    </div>
  );
};

export default ProductsComponent;
