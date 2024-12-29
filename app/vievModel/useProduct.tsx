import { useState, useEffect } from "react";
import { fetchProductData } from "../model/product";
import { Product } from "~/types/types";
import { useLoading } from "~/context/loadingContext";
import { useError } from "~/context/errorContext";

const useProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { setError } = useError();
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(true);
    getProduct();
  }, []);

  let array: Product[] = [];
  const getProduct = async (url?: string) => {
    try {
      const data = await fetchProductData(url ? url : "");
      array = [...array, ...data.productList];
      if (data.nextUrl) {
        await getProduct(data.nextUrl);
      } else {
        setProducts(array);
      }
    } catch (err) {
      setError("Bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  return { products };
};

export default useProduct;
