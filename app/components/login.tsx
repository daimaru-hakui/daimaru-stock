'use client';
import { cookies } from 'next/headers';
import { useState, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { Database } from '@/database.types';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useForm, SubmitHandler } from 'react-hook-form';
import Loading from '../loading';
import { Spinner } from './spinner';
import { Button } from './button/button';
import { FaLock } from 'react-icons/fa';

type Inputs = {
  email: string;
  password: string;
};

export default async function Login() {
  const [message, setMessage] = useState('');
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });
      if (error) {
        setMessage('エラーが発生しました' + error.message);
        return;
      }
    } catch (error) {
      setMessage('エラーが発生しました' + error);
    } finally {
      router.refresh();
    }
  };

  return (
    <div className="w-full h-[calc(100vh-70px)] flex items-center justify-center">
      <div className="w-[calc(400px)] bg-white p-6 rounded-md shadow-md">
        <div className='flex justify-center items-center flex-col mb-3'>
        <div className='mb-4 text-2xl'>Login</div>
          <FaLock className='w-8 h-8' />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@company.com"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <div className="mt-2 ml-2 text-sm text-red-500">
                emailを入力してください
              </div>
            )}
          </div>
          <div className="mb-3">
            <label
              htmlFor="password"
              className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
              {...register('password', { required: true })}
            />
            {errors.password && (
              <div className="mt-2 ml-2 text-sm text-red-500">
                passwordを入力してください
              </div>
            )}
          </div>
          <Suspense fallback={<Spinner />}>
            <div className="mt-9">
              <Button
                type="submit"
                size="sm"
                w="w-full"
                bg="bg-black"
                props=""
              >
                ログイン
              </Button>
            </div>
          </Suspense>
        </form>
      </div>
    </div>
  );
}
