'use client';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group } from '@mantine/core';
import { FaEdit } from 'react-icons/fa';
import { CategoryForm } from './category-form';
import { Database } from '@/database.types';

type Category = Database['public']['Tables']['categories']['Row'];

export function CategoryModal({ category }: { category: Category }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="カテゴリー名を編集">
        <CategoryForm category={category} btnText='更新' close={close} />
      </Modal>

      <Group position="center">
        <FaEdit onClick={open} className="cursor-pointer" />
      </Group>
    </>
  );
}
