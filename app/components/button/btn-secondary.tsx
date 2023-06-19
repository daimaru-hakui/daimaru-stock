import React from 'react';

export const BtnSecondary = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="px-4 py-2 font-semibold text-sm bg-gray-400 hover:bg-gray-300 text-white rounded-md shadow-sm cursor-pointer">
      {children}
    </button>
  );
};
