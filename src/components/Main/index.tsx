import * as S from './style';

// Icons
import { NextDotJs as NextJsIcon } from '@styled-icons/simple-icons';

type Props = {
  title?: string;
  description?: string;
  illustrationSrc?: string;
};

const Main = ({ title, description, illustrationSrc }: Props) => (
  <S.Container>
    <NextJsIcon color="white" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration src={illustrationSrc} />
  </S.Container>
);

export default Main;
