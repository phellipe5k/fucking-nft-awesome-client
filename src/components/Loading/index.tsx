import * as S from './style';

type Props = {
  title?: string;
};

const Loading = ({ title = 'Loading' }: Props) => (
  <S.Container>

    <div className="loader">
      <div className="inner one"></div>
      <div className="inner two"></div>
      <div className="inner three"></div>
    </div>
  </S.Container>

);

export default Loading;
