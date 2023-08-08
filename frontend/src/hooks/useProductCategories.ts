import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

//  API for product category returns an array of strings which are the categories.
//  Need to turn this into an array of ProductCategory objects to be more usefult in the app.

export interface ProductCategory {
  name: string;
}

interface FetchProductCategoriesResponse {
  count: number;
  categories: ProductCategory[];
}

const useProductCategories = () => {
  const [productCategories, setProductCategories] = useState<ProductCategory[]>(
    []
  );
  const [productCount, setProductCount] = useState(0);
  const [productCategoriesError, setProductCategoriesError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<string[]>("/products/categories", { signal: controller.signal })
      .then((res) => {
        var blah = res.data.map(
          (c) =>
            <ProductCategory>{
              name: c,
            }
        );
        setProductCategories(blah);
        setProductCount(blah.length);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setProductCategoriesError(err.message);
        setLoading(false);
        setError(true);
      });

    return () => controller.abort();
  }, []);

  return { productCategories, productCategoriesError, isLoading, error };
};

export default useProductCategories;
