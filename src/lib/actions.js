'use server';

import SearchIndex from './search';

export async function searchQuery(prevState, formData) {
  const query = formData.get('query');
  const results = SearchIndex.search(query);
  return results;
}
