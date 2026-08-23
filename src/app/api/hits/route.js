import { NextResponse } from 'next/server';

import { supabaseAdmin } from 'src/lib/supabase-server';

export async function POST(request) {
  const { slug } = await request.json();

  if (!slug) {
    return NextResponse.json({ error: 'slug is required' }, { status: 400 });
  }

  const { data, error } = await supabaseAdmin.rpc('increment_hit', { hit_slug: slug });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data?.[0] ?? {});
}
