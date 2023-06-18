import React from 'react';

export const Sidebar = ({ children }: { children: React.ReactNode; }) => {
  return (
    <aside className='p-6 lg:w-2/12'>{children}</aside>
  );
};
