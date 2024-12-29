import { Link } from "@remix-run/react";
import { useState } from "react";
import { PriceComponent } from "~/common/common";
import { Product } from "~/types/types";

interface ProductProps {
  products: Product[];
}

export default function ProductSlider({ products }: ProductProps) {
  const [slide, setSlide] = useState(0);

  return (
    <div className="relative flex mb-5 justify-center items-center h-64">
      {products.map((product: Product, i: number) => {
        return (
          <Link
            to={"/productDetail/" + product.code}
            key={i}
            className={
              slide === i
                ? "rounded-lg shadow-lg"
                : "rounded-lg shadow-lg hidden"
            }
          >
            <div className="max-w-sm w-96 mx-auto flex columns-1 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-48 object-cover"
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
                  <span className="text-xl font-bold">
                    {PriceComponent(product.price)}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
      <span className="flex absolute bottom-1">
        {products.map((_: Product, i: number) => {
          return (
            <button
              key={i}
              className={
                slide === i
                  ? "bg-gray-400 h-2 w-2 rounded-xl border-none outline-none shadow-lg cursor-pointer m-1"
                  : "bg-gray-700 h-2 w-2 rounded-xl border-none outline-none shadow-lg cursor-pointer m-1"
              }
              onClick={() => setSlide(i)}
            ></button>
          );
        })}
      </span>
    </div>
  );
}
