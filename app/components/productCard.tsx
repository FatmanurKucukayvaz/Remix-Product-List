import { Link } from "@remix-run/react";
import { PriceComponent } from "../common/common";
import { Product } from "../types/types";

interface ProductProps {
  product: Product;
}
export default function ProductCard({ product }: ProductProps) {
  return (
    <Link to={`/productDetail/${product.code}`}>
      <div className="max-w-sm w-96 mx-auto flex flex-col bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-48 object-cover self-center mt-2"
        />

        <div className="p-4">
          <h2 className="text-lg text-blue-600">{product.name}</h2>

          <p className="text-gray-600 text-sm mt-1">
            {product.countOfPrices} satıcı
          </p>
          <p className="text-gray-600 text-sm mt-1">
            {product.followCount} takip
          </p>

          <div className="mt-1 flex items-center justify-between">
            <span className="text-xl font-semibold">
              {PriceComponent(product.price)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
