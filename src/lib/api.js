import { supabase } from '@/lib/supabase';

export const getLikes = async (slug) => {
  const { data, error } = await supabase
    .from('likes')
    .select('slug, count')
    .eq('slug', slug);
  if (error) throw error;
  if (data && data.length) return data[0];
  return {};
};

export const updateLikes = async ({ slug, count }) => {
  const { data, error } = await supabase.from('likes').update({ count }).eq('slug', slug);
  if (error) throw error;
  if (data && data.length) return data[0];
  return {};
};

export const getRickRoll = async () => {
  const { data, error } = await supabase.from('rickroll').select();
  if (error) throw error;
  if (data && data.length) return data[0];
  return {};
};

export const updateRickRoll = async (count) => {
  const { data, error } = await supabase
    .from('rickroll')
    .update({ count, date: new Date() });
  if (error) throw error;
  if (data && data.length) return data[0];
  return {};
};
