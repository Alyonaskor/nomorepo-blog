import React from 'react';

import '../styles/globals.scss';
import {Layout}  from '@monorepo-nx/std-watch/ui';

function StdWatch({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default StdWatch;
