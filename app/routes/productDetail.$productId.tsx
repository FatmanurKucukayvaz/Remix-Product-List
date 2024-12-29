import { useParams } from "@remix-run/react";
import { PriceComponent } from "~/common/common";
import { DetailParam } from "~/types/types";
import useProductDetail from "~/vievModel/useProductDetail";

export default function ProductDetailPage() {
  const params = useParams<DetailParam>();
  const { productDetail } = useProductDetail({ params });

  return (
    <div className="m-5 mx-auto max-w-[35rem] flex flex-col bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="mt-1 flex items-center justify-between pl-4 pr-4">
        <p className="text-blue-600 text-sm mt-1">{productDetail?.badge}</p>
        <p className="text-gray-600 text-sm">
          Son güncelleme:{" "}
          {productDetail?.lastUpdate == "now"
            ? "Şimdi"
            : productDetail?.lastUpdate}
        </p>
      </div>
      <img
        src={productDetail?.imageUrl}
        alt={productDetail?.productName}
        className="h-48 object-cover self-center mt-2"
      />

      <div className="p-4">
        <p className="text-blue-600 text-sm">{productDetail?.mkName}</p>
        <h2 className="text-lg text-blue-600 mt-1">
          {productDetail?.productName}
        </h2>

        <p className="text-gray-600 text-sm mt-1">
          {productDetail?.countOfPrices} satıcı
        </p>

        <div className="mt-1 flex items-center justify-between">
          <span className="text-xl font-bold">
            {PriceComponent(productDetail?.price)}
          </span>
          <p className="text-green-600 text-sm">
            {productDetail?.freeShipping ? "Ücretsiz Kargo" : "+ Kargo ücreti"}
          </p>
        </div>
      </div>
    </div>
  );
}
