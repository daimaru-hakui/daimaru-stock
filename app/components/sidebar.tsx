import React from 'react';

export const Sidebar = ({ children }: { children: React.ReactNode; }) => {
  return (
    <aside className='bg-white h-[calc(100vh-50px)] lg:w-3/12 border-r border-neutral-200 shadow-sm'>{children}</aside>
  );
};
