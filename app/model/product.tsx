import { ProductResponse, ProductDetail } from "../types/types";

export const fetchProductData = async (
  url?: string
): Promise<ProductResponse> => {
  let fetchUrl = url ? url : `https://mock.akakce.dev/page.json`;
  const response = await fetch(fetchUrl);
  const data: ProductResponse = await response.json();
  return data;
};

export const fetchProductDetail = async (
  productId: string
): Promise<ProductDetail> => {
  const response = await fetch(
    `https://mock.akakce.dev/product${productId}.json`
  );
  const data: ProductDetail = await response.json();
  return data;
};
