import React from 'react';
import { render, screen } from '@testing-library/react';

import ExternalLink from 'src/components/ExternalLink';

describe('Component Tests - ExternalLink', () => {
  it('should render the external icon', () => {
    render(<ExternalLink href="https://www.misha.wtf">Foo</ExternalLink>);
    const icon = screen.getByTestId('icon-external');
    expect(icon).toBeInTheDocument();
  });

  it('should render provided text', () => {
    render(<ExternalLink href="https://www.misha.wtf">Foo</ExternalLink>);
    const text = screen.getByText(/Foo/i);
    expect(text).toBeInTheDocument();
  });
});
