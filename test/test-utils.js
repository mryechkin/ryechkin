/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'next-themes';
import { darkTheme, globalCss, Provider as WTFProvider } from 'wtf-design-system';

import { MDX } from '@/components';

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0 },
});

function AllTheProviders({ children }) {
  globalStyles();

  return (
    <WTFProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
        enableSystem={false}
        value={{ light: 'light', dark: darkTheme.className }}
      >
        <MDXProvider components={MDX}>{children}</MDXProvider>
      </ThemeProvider>
    </WTFProvider>
  );
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
