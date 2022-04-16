import { render, screen } from '@testing-library/react';

import Loading from '.';

describe('<Loading />', () => {
  const { container } = render(<Loading />);

  it('should title be the component name', () => {
    expect(screen.getByRole('heading', { name: /Loading/i }));
  });

  it('should snapshot', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
