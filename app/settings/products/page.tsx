import Link from "next/link";
import { Button } from "@/app/components/button/button";
import { ProductsFetch } from "@/app/components/settings/products/fetch-products";

const Products = () => {
  return (
    <div className="w-full h-full p-6 flex justify-center">
    <div className="w-[500px] h-auto p-6 bg-white rounded-md shadow-md">
      <div className="flex justify-between items-center">
        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
         商品マスター
        </h2>
        <Link href="/settings/products/new">
          <Button bg="bg-black" size="sm">新規登録</Button>
        </Link>
      </div>
      <ProductsFetch />
    </div>
  </div>
  );
};

export default Products;