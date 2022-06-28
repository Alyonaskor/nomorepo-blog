import React from 'react';
import { Header } from '@monorepo-nx/std-watch/ui';

const Layout = ({ children }) => (

  <>
    <Header />
    {children}
  </>
);

export default Layout;
