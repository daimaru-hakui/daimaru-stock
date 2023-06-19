import { BtnPrimary } from '@/app/components/button/btn-primary';
import CategoriesList from '@/app/components/categories/categories-list';
import { Database } from '@/database.types';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import React from 'react';
import {cookies} from "next/headers"
import { redirect } from 'next/navigation';


const CateogoriesPpage = async() => {
    const supabase = createServerComponentClient<Database>({ cookies });
    const { data: { session } } = await supabase.auth.getSession();
    
    if(!session) {
      redirect('/auth/login')
    }
    
  return (
    <div className="w-full p-6 flex justify-center">
      <div className="w-[500px] p-6 bg-white rounded-md shadow-md">
        <div className="flex justify-between items-center">
          <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
            カテゴリー
          </h2>
          <Link href="/settings/categories/new">
            <BtnPrimary>新規登録</BtnPrimary>
          </Link>
        </div>
        <CategoriesList />
      </div>
    </div>
  );
};

export default CateogoriesPpage;
