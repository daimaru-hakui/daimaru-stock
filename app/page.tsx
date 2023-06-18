import { Suspense } from 'react';
import { ProductList } from './components/products-list';
import { Spinner } from './components/spinner';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from "next/headers";
import type { Database } from "../database.types";

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: { session } } = await supabase.auth.getSession();

  return (
    <main>
      {session ? "ログイン済み" : "未ログイン"}
      <div className="col-6">
        <h1 className="header">Hello World</h1>
        <Suspense fallback={<Spinner />}>

          <ProductList />
        </Suspense>
      </div>
    </main>
  );
}