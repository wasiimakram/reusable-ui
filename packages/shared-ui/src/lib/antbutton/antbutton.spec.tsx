import { render } from '@testing-library/react';

import Antbutton from './antbutton';

describe('Antbutton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Antbutton />);
    expect(baseElement).toBeTruthy();
  });
});
