import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { ProductCategory } from "./useProductCategories";

export interface Product {
  id: number;
  category: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  title: string;
  thumbnail: string;
}

interface FetchProductsResponse {
  count: number;
  products: Product[];
}

const useProducts = (
  selectedProductCategory: ProductCategory | null,
  deps?: any[]
) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      let url = "/products";
      if (selectedProductCategory) {
        url = url + "/category/" + selectedProductCategory.name;
      }

      setLoading(true);
      apiClient
        .get<FetchProductsResponse>(url, { signal: controller.signal })
        .then((res) => {
          setProducts(res.data.products);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { products, error, isLoading };
};

export default useProducts;
