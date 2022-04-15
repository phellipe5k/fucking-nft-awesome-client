import * as S from './style';
import { Button } from 'web3-components';
// Icons

type Props = {
  title?: string;
  description?: string;
  illustrationSrc?: string;
};

const Main = ({ title, description, illustrationSrc }: Props) => (
  <S.Container>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <Button.Gradient gradientColors={'#ec4899, #6366f1'}>Connect to wallet</Button.Gradient>
  </S.Container>
);

export default Main;
