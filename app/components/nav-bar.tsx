"use client";
import Link from 'next/link';
import React from 'react';
import type { Session } from '@supabase/auth-helpers-nextjs';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { Button } from '@mantine/core';
export const Navbar = ({ session }: { session: Session | null; }) => {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const navList = [
    {
      link: "/",
      title: "Home"
    },
    {
      link: "/products",
      title: "商品一覧"
    },
    {
      link: "/products/new",
      title: "商品登録"
    },
    {
      link: "/settings/categories",
      title: "カテゴリー一覧"
    },
    {
      link: "/settings/colors",
      title: "カラー一覧"
    },
  ];

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <header className='bg-gray-800 p-4 drop-shadow-md'>
      <nav className="space-x-4">
        {session ? (
          <>
            {
              navList.map(({ link, title }) => (
                <Link key={title} href={link} >
                  <Button className='rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500'>{title}</Button>
                </Link>
              ))}
            <Button className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500" onClick={handleSignOut}>ログアウト</Button>
          </>

        ) : (
          <>
            <Link href="/auth/login"><Button className='rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500'>ログイン</Button></Link>
            <Link href="/auth/signup"><Button className='rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500'>サインアップ</Button></Link>
          </>
        )}
      </nav>
    </header>
  );
};
