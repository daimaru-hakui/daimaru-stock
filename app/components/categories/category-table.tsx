'use client';
import { Database } from '@/database.types';
import React, { FC } from 'react';
import {  FaTrashAlt } from 'react-icons/fa';
import { CategoryModal } from './category-modal';
type Category = Database['public']['Tables']['categories']['Row'];

type Props = {
  categories: Category[];
};

export const CategoryTable: FC<Props> = ({ categories }) => {
  return (
    <table className="table-auto border-collapse w-full mt-6 text-sm">
      <thead>
        <tr>
          <th className="border-b border-slate-200 font-bold font-medium p-4 pl-8 pt-0 pb-3 text-left">
            カテゴリー名
          </th>
          <th className="border-b border-slate-200 font-bold font-medium p-4 pl-8 pt-0 pb-3 text-left"></th>
        </tr>
      </thead>
      <tbody className="bg-white dark:bg-slate-800">
        {categories.map((cateogory) => (
          <tr
            key={cateogory.id}
            className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400"
          >
            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-500">
              {cateogory.category_name}
            </td>
            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-500 ">
              <div className="flex justify-end space-x-5">
                <CategoryModal category={cateogory} />
                <FaTrashAlt className="cursor-pointer" />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
