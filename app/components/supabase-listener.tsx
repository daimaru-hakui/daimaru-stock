'use server';

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Navbar } from "./nav-bar";
import type { Database } from '../../database.types';

const SupabaseListener = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: { session } } = await supabase.auth.getSession();

  return <Navbar session={session} />;
};
export default SupabaseListener;