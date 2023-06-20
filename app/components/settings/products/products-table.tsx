'use client';
import Providers from '@/app/providers';
import { Database } from '@/database.types';
import { format } from 'date-fns';
import React from 'react';
type Product = Database['public']['Tables']['products']['Row'];

export const ProductTable = ({ products }: { products: Product[] }) => {
  return (
    <Providers>
      <table className="table-auto border-collapse w-full mt-6 text-sm">
        <thead>
          <tr>
            <th className="border-b border-slate-200 font-bold p-4 pl-8 pt-0 pb-3 text-left">
              品番
            </th>
            <th className="border-b border-slate-200 font-bold p-4 pl-8 pt-0 pb-3 text-left">
              商品名
            </th>
            <th className="border-b border-slate-200 font-bold p-4 pl-8 pt-0 pb-3 text-left">
              登録日
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-black dark:text-slate-500">
                {product.product_number}
              </td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-black dark:text-slate-500">
                {product.product_name}
              </td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-black dark:text-slate-500">
                {product.created_at &&
                  format(new Date(product.created_at), 'yyyy-MM-dd HH:mm:ss')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Providers>
  );
};
