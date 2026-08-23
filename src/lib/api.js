import { supabase } from 'src/lib/supabase';

export const getHits = async (slug) => {
  const { data, error } = await supabase.from('hits').select('id, count').eq('id', slug);

  if (error) {
    throw error;
  }

  if (data && data.length) {
    return data[0];
  }

  return {};
};

// Increment goes through our API route which uses the service_role key,
// so it bypasses RLS while the client stays read-only.
export const incrementHits = async (slug) => {
  const res = await fetch('/api/hits', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ slug }),
  });

  if (!res.ok) {
    throw new Error('Failed to increment hits');
  }

  return res.json();
};
