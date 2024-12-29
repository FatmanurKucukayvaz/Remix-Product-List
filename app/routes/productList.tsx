import ProductCard from "~/components/productCard";
import useProduct from "~/vievModel/useProduct";
import useHorizontalProduct from "~/vievModel/useHorizontalProduct";
import ProductSlider from "~/components/productSlider";
import { useState } from "react";

export default function ProductList() {
  const { products } = useProduct();
  const { horizontalProducts } = useHorizontalProduct();

  const [currentPage, setCurrentPage] = useState(1);
  const dataForPage = 6;

  const lastDataIndex = currentPage * dataForPage;
  const firstDataIndex = lastDataIndex - dataForPage;
  const showData = products.slice(firstDataIndex, lastDataIndex);

  const totalPages = Math.ceil(products.length / dataForPage);

  return (
    <div className="min-h-scree p-6 lg:px-40 sm:px-6">
      <ProductSlider products={horizontalProducts}></ProductSlider>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
        {showData.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <div className="flex m-5 justify-center">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            className="p-3 m-1 bg-gray-400 rounded-lg text-white self-center"
            key={i}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
