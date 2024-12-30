import { useState, useEffect } from "react";
import { fetchProductDetail } from "../model/product";
import { DetailParam, ProductDetail } from "../types/types";
import { useLoading } from "../context/loadingContext";
import { useError } from "../context/errorContext";

interface ParamProps {
  params: DetailParam;
}

const useProductDetail = ({ params }: ParamProps) => {
  const [productDetail, setProductDetail] = useState<ProductDetail | null>(
    null
  );
  const { setLoading } = useLoading();
  const { setError } = useError();

  useEffect(() => {
    const getProductDetail = async () => {
      try {
        if (params.productId) {
          const data = await fetchProductDetail(params.productId);
          setProductDetail(data);
        } else {
          setError("Geçersiz ürün ID'si.");
          setLoading(false);
          return;
        }
      } catch (err) {
        setError("Bir hata oluştu.");
      } finally {
        setLoading(false);
      }
    };
    setLoading(true);
    getProductDetail();
  }, [params.productId]);

  return { productDetail };
};

export default useProductDetail;
