import { Database } from '@/types/supabase';
import { createServerClient } from '@supabase/ssr';
import { cookies as getCookies } from 'next/headers';

export const createClient = (
  cookies?: ReturnType<typeof getCookies>,
  legacyCookies?: Partial<{
    [key: string]: string;
  }>,
) => {
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookies?.get(name)?.value ?? legacyCookies?.[name];
        },
      },
    },
  );
};
