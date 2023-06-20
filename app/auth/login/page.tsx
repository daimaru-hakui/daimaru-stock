import { cookies } from 'next/headers';
import { Database } from '@/database.types';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import Login from '@/app/components/login';
import { Suspense } from 'react';
import { Spinner } from '@/app/components/spinner';

export default async function LoginPage() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect('/');
  }

  return <Login />;
}
