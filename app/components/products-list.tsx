import type { Database } from "../../database.types";
import { ProductTable } from "./products/table";

type Product = Database['public']['Tables']['products']['Row'];

async function fetchProducts() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch(`${process.env.url}/rest/v1/products?select=*`, {
    headers: new Headers({
      apikey: process.env.apikey as string
    }),
    cache: "no-cache"
  })
    ;
  if (!res.ok) {
    throw new Error('Failed to fetch data in server');
  }

  const products: Product[] = await res.json();
  return products;
}

export const ProductList = async () => {
  const products = await fetchProducts();
  return (<ProductTable products={products} />);
};
