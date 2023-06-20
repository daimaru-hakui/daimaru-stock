import React from 'react';
import { Database } from '../../../../database.types';
import { ProductTable } from './products-table';

type Product = Database['public']['Tables']['products']['Row'];

const getProducts = async () => {
  const res = await fetch(`${process.env.url}/rest/v1/products?select=*`, {
    headers: new Headers({
      apikey: process.env.apikey as string,
    }),
    cache: "no-cache"
  });
  if (!res.ok) {
    throw new Error('productsの取得に失敗しました。');
  }
  const products: Product[] = await res.json();
  return products;
};
export const ProductsFetch = async () => {
  const products = await getProducts();
  return <ProductTable products={products} />;
};
