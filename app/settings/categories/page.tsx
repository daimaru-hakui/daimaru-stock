import CategoriesList from '@/app/components/settings/categories/fetch-categories';
import { Database } from '@/database.types';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import React from 'react';
import {cookies} from "next/headers"
import { redirect } from 'next/navigation';
import { Button } from '@/app/components/button/button';


const CateogoriesPpage = async() => {
    const supabase = createServerComponentClient<Database>({ cookies });
    const { data: { session } } = await supabase.auth.getSession();
    
    if(!session) {
      redirect('/auth/login')
    }
    
  return (
    <div className="w-full h-full p-6 flex justify-center">
      <div className="w-[500px] h-auto p-6 bg-white rounded-md shadow-md">
        <div className="flex justify-between items-center">
          <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
            カテゴリーマスター
          </h2>
          <Link href="/settings/categories/new">
            <Button bg="bg-black" size="sm">新規登録</Button>
          </Link>
        </div>
        <CategoriesList />
      </div>
    </div>
  );
};

export default CateogoriesPpage;
