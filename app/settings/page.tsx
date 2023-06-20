import React from 'react';
import { Button } from '../components/button/button';
import Link from 'next/link';

const SettingsPage = () => {
  const cards = [
    {
      title: '商品',
      desc: '商品の品番と品名を登録',
      link: '/settings/products',
    },
    {
      title: 'カテゴリー',
      desc: 'カテゴリー名の登録',
      link: '/settings/categories',
    },
    {
      title: 'サイズ',
      desc: 'サイズ規格の登録',
      link: '/settings/sizes',
    },
  ];

  return (
    <div className="w-full h-full p-6 flex flex-col justify-center items-center">
      <h2 className="max-w-[750px] mt-9 mb-2 text-2xl font-semibold text-gray-900">
        マスター登録
      </h2>
      <div className="max-w-[800px] h-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map(({ title, desc, link }, index) => (
          <div key={index} className="bg-white p-6 rounded-md shadow-md">
            <h3>{title}</h3>
            <div className="mt-6">{desc}</div>
            <div className="mt-3">
              <Link href={link}>
                <Button size="md" bg="bg-black">
                  作成
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsPage;
