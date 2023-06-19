import React from 'react';

export const BtnPrimary = ({
  children,
  type = undefined,
}: {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
}) => {
  return (
    <button
      type={type}
      className="w-full px-4 py-2 font-semibold text-sm bg-blue-500 hover:bg-blue-400 text-white rounded-md shadow-sm cursor-pointer"
    >
      {children}
    </button>
  );
};
