import { render, screen } from '@testing-library/react';

import Main from '.';

describe('<Main/>', () => {
  const { container } = render(
    <Main
      title="React Avançado"
      description="Crie aplicações reais com NextJS, Strapi, GraphQL e mais!"
      illustrationSrc="https://d33wubrfki0l68.cloudfront.net/cf9dfe86983925690340feb07037ee260f872e34/74dff/img/hero-illustration.svg"
    />
  );

  it('should everything be centered on screen', () => {
    expect(container.firstChild).toHaveStyle({ 'align-items': 'center' });
  });

  it('should snapshot', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
