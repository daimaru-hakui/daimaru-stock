'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { BtnPrimary } from '../button/btn-primary';
import { Database } from '@/database.types';

type Category = Database['public']['Tables']['categories']['Row'];

type Inputs = {
  category_name: string;
};

type Props = {
  category?: Category;
  btnText: string;
};

export const CategoryForm: FC<Props> = ({ category, btnText }) => {
  const supabase = createClientComponentClient();

  const addCategory = async (name: string) => {
    const { data } = await supabase
      .from('categories')
      .insert({ category_name: name });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      category_name: category?.category_name || '',
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await addCategory(data.category_name);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex mb-2">
        <div className="w-full mt-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="category"
          >
            カテゴリー名
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="category"
            type="text"
            placeholder="カテゴリー名"
            {...register('category_name', { required: true })}
          />
          {errors.category_name && (
            <div className="mt-2 text-red-500">
              カテゴリー名を入力してください
            </div>
          )}
        </div>
      </div>
      <div className="mt-6">
        <BtnPrimary type="submit">{btnText}</BtnPrimary>
      </div>
    </form>
  );
};
