import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import CategoriesList from '../components/categories/categories-list';
import { Sidebar } from '../components/sidebar';
import { Database } from '@/database.types';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if(!session) {
    redirect('/auth/login')
  }
  
  return (
    <section className="flex w-full">
      <Sidebar>
        <CategoriesList />
      </Sidebar>
      <main className="mt-6 flex justify-center w-8/12">
        <div className="p-6 border border-gray-200 rounded-md">{children}</div>
      </main>
    </section>
  );
}
