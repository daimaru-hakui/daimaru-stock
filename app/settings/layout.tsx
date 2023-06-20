import React from 'react';
import { Sidebar } from '../components/sidebar';
import { SidebarList } from '../components/settings/sidebar-list';

const layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <section className="flex">
      <Sidebar>
        <div><SidebarList/></div>
      </Sidebar>
      {children}
    </section>
  );
};

export default layout;
