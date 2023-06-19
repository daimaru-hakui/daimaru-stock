import ColorsList from '@/app/components/colors/colors-list';
import React from 'react';

const ColorsPage = () => {
  return (
    <div className="flex">
      <div className="flex justify-between">
        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          カラー一覧
        </h2>
        <div>新規登録</div>
        <ColorsList />
      </div>
    </div>
  );
};

export default ColorsPage;
