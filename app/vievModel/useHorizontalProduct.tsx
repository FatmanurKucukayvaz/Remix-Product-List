import { useState, useEffect } from "react";
import { fetchProductData } from "../model/product";
import { Product } from "~/types/types";
import { useLoading } from "~/context/loadingContext";
import { useError } from "~/context/errorContext";

const useHorizontalProduct = () => {
  const [horizontalProducts, setHorizontalProducts] = useState<Product[]>([]);
  const { setLoading } = useLoading();
  const { setError } = useError();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProductData();
        setHorizontalProducts(
          data.horizontalProductList ? data.horizontalProductList : []
        );
      } catch (err) {
        setError("Bir hata oluştu.");
      } finally {
        setLoading(false);
      }
    };

    setLoading(true);
    getProduct();
  }, []);

  return { horizontalProducts };
};

export default useHorizontalProduct;
