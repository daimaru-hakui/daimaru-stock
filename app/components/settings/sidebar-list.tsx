'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export const SidebarList = () => {
  const pathname = usePathname()
  const list = [
    {
      title: 'マスター一覧',
      desc: '',
      link: '/settings',
    },
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
    {
      title: '色',
      desc: '色のバリエーションを登録',
      link: '/settings/colors',
    },
  ];

  return (
    <div>
      <ul>
        {list.map(({ title, desc, link }, index) => (
          <Link key={index} href={link} className='text-black text-sm font-bold'>
            <li className={`px-6 py-4 border-b border-gray-200 hover:bg-gray-100 ${pathname === link && "bg-gray-100"}`}>{title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
