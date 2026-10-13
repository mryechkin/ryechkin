import { NextResponse } from 'next/server';

import { pages } from 'src/lib/search';
import { getSupabaseAdmin } from 'src/lib/supabase-server';

const VALID_SLUGS = new Set([
  'index',
  'about',
  'blog',
  'search',
  'snippets',
  'videos',
  ...pages.map((page) => page.path.slice(1)),
]);

export async function POST(request) {
  let slug;

  try {
    ({ slug } = await request.json());
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  if (!VALID_SLUGS.has(slug)) {
    return NextResponse.json({ error: 'Invalid slug' }, { status: 400 });
  }

  const { data, error } = await getSupabaseAdmin().rpc('increment_hit', {
    hit_slug: slug,
  });

  if (error) {
    // eslint-disable-next-line no-console
    console.error('increment_hit failed:', error);
    return NextResponse.json({ error: 'Failed to increment hits' }, { status: 500 });
  }

  return NextResponse.json(data?.[0] ?? {});
}
