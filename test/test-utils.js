/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
// import { render } from '@testing-library/react';
import { ThemeProvider } from 'next-themes';

import MDX from 'src/components/MDX';

function AllTheProviders({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
      enableSystem={false}
    >
      <MDXProvider components={MDX}>{children}</MDXProvider>
    </ThemeProvider>
  );
}

// const customRender = (ui, options) =>
//   render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
// export * from '@testing-library/react';

// override render method
// export { customRender as render };
