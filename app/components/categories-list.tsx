import type { Database } from "../../database.types";
type Category = Database['public']['Tables']['categories']['Row'];

async function fetchCategories() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch(`${process.env.url}/rest/v1/categories?select=*`, {
    headers: new Headers({
      apikey: process.env.apikey as string
    }),
    cache: "no-cache"
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
    <>
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">カテゴリー</h2>
      <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
        {categories.map((cateogory) => (
          <li key={cateogory.id}>
            {cateogory.category_name}
          </li>
        ))}
      </ul>
    </>
  );
}
