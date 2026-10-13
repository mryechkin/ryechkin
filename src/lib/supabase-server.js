import 'server-only';

import { createClient } from '@supabase/supabase-js';

// Server-only client using the service_role key — bypasses RLS.
// Created lazily so builds don't require the key.
let client;

export function getSupabaseAdmin() {
  client ??= createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
  );
  return client;
}
