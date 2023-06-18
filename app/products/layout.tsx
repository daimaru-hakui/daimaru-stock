import CategoriesList from "../components/categories-list";
import { Sidebar } from "../components/sidebar";
import Providers from "../providers";

export default function RootLayout(
  { children }: { children: React.ReactNode; }) {
  return (
    <section className="flex w-full">
      <Sidebar>
        <CategoriesList />
      </Sidebar>
      <main className="mt-6 flex justify-center w-8/12">
        <div className="p-6 border border-gray-200 rounded-md">
          {children}
        </div>
      </main>
    </section>
  );
}