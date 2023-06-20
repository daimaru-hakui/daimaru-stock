import Link from 'next/link';
import React from 'react';
import { BtnSecondary } from '@/app/components/button/btn-secondary';
import { CategoryForm } from '@/app/components/settings/categories/category-form';

const CategoryNewPage = () => {
  return (
    <div className="w-full h-full p-6 flex justify-center">
    <div className="w-[500px] p-6 bg-white rounded-md shadow-md">
      <div className="flex justify-between">
        <h2>カテゴリー登録</h2>
        <Link href="/settings/categories">
          <BtnSecondary>戻る</BtnSecondary>
        </Link>
      </div>
      <CategoryForm btnText='登録'/>
    </div>
  </div>
  );
};

export default CategoryNewPage;
