import type { Database } from "../../../../database.types";
type Color = Database['public']['Tables']['colors']['Row'];

async function fetchColors() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch(`${process.env.url}/rest/v1/colors?select=*`, {
    headers: new Headers({
      apikey: process.env.apikey as string
    }),
    cache: "no-cache"
  });
  if (!res.ok) {
    throw new Error('Failed to fetch category data in server');
  }
  const colors: Color[] = await res.json();
  return colors;
}

export default async function ColorsList() {
  const colors = await fetchColors();
  return (
   

      <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
        {colors.map((cateogory) => (
          <li key={cateogory.id}>
            {cateogory.color_name}
          </li>
        ))}
      </ul>
  );
}
