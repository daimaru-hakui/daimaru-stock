'use client';
import Link from 'next/link';
import React from 'react';
import type { Session } from '@supabase/auth-helpers-nextjs';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
export const Navbar = ({ session }: { session: Session | null }) => {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const navList = [
    {
      link: '/',
      title: 'Home',
    },

    {
      link: '/settings',
      title: 'マスター登録',
    },
  ];

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <header className="bg-white px-4 drop-shadow-sm border-b border-neutral-200">
      <nav className="flex justify-between items-center space-x-4 h-[calc(50px)]">
        <div className="font-bold">在庫管理アプリ</div>
        {session ? (
          <div className="flex space-x-4">
            {navList.map(({ link, title }) => (
              <Link key={title} href={link}>
                <div className="px-3 py-2 text-black text-sm font-bold">
                  {title}
                </div>
              </Link>
            ))}
            <div
              className="px-3 py-2 text-black text-sm font-bold cursor-pointer"
              onClick={handleSignOut}
            >
              ログアウト
            </div>
          </div>
        ) : (
          <div className="flex space-x-4">
            <Link href="/auth/login">
              <div className="px-3 py-2 text-black text-sm font-bold">
                ログイン
              </div>
            </Link>
            <Link href="/auth/signup">
              <div className="px-3 py-2 text-black text-sm font-bold">
                サインアップ
              </div>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};
