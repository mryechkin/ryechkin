import { supabase } from '@/lib/supabase';

export const getHits = async (slug) => {
  const { data, error } = await supabase.from('hits').select('id, count').eq('id', slug);
  if (error) throw error;
  if (data && data.length) return data[0];
  return {};
};

export const updateHits = async ({ slug, count }) => {
  const { data, error } = await supabase
    .from('hits')
    .update({ count, date: new Date() })
    .eq('id', slug);
  if (error) throw error;
  if (data && data.length) return data[0];
  return {};
};
