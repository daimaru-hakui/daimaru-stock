"use client";
import Providers from '@/app/providers';
import { Database } from '@/database.types';
import { Button, Table } from '@mantine/core';
import { format } from 'date-fns';
import React from 'react';
type Product = Database['public']['Tables']['products']['Row'];

export const ProductTable = ({ products }: { products: Product[]; }) => {
  return (
    <Providers>
      <table>
        <thead>
          <tr>
            <th className='bg-slate-100'>品番</th>
            <th className='bg-slate-100'>商品名</th>
            <th className='bg-slate-100'>登録日</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.product_number}</td>
              <td>{product.product_name}</td>
              <td>{product.created_at && format(new Date(product.created_at), 'yyyy-MM-dd HH:mm:ss')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Providers>
  );
};
