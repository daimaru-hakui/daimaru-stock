import type { Database } from '../../../database.types';
import { CategoryTable } from './category-table';
type Category = Database['public']['Tables']['categories']['Row'];

async function fetchCategories() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch(`${process.env.url}/rest/v1/categories?select=*`, {
    headers: new Headers({
      apikey: process.env.apikey as string,
    }),
    cache: 'no-cache',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch category data in server');
  }
  const categories: Category[] = await res.json();
  return categories;
}

export default async function CategoriesList() {
  const categories = await fetchCategories();
  return (
    <CategoryTable categories={categories}/>
  );
}
