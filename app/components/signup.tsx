'use client';
import useStore from "../store";
import { cookies } from 'next/headers';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Providers from '../providers';
import { Box, Button, Flex, Paper, Stack, TextInput } from '@mantine/core';
import { Database } from '@/database.types';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string,
  password: string,
};


export default async function SignUp() {
  const { loginUser } = useStore();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    try {
      await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      })
    } catch (error) {
      setMessage('エラーが発生しました' + error);
    } finally {
      setLoading(false);
      router.refresh();
    }
  };

  return (
    <div className='w-full h-[calc(100vh-70px)] flex items-center justify-center'>
      <div className="w-[calc(500px)]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@company.com"
              {...register("email", { required: true })} />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
              {...register("password", { required: true })} />
          </div>
          <button type="submit" className="w-full py-3 rounded-lg text-white bg-blue-800 cursor-pointer">ログイン</button>
        </form>
      </div>
    </div>
  );
}