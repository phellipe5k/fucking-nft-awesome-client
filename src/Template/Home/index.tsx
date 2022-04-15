import * as S from './style';
import Main from 'components/Main';
type Props = {
  title?: string;
};

const HomePage = ({ title = 'HomePage' }: Props) => (
  <S.Container>
    <Main
        title="Fucking NFT Awesome Collection"
        description="Each unique. Each beautiful. Discover your NFT today."
    />
      <S.NFT>
          <S.NFTImage src={'https://www.arweave.net/-SQfRmL8LD_8ceC98WUGxAWhkZ1CXn_Q2rNYfGylnng?ext=png'} />
            <S.Info>
                <S.Text>Last NFT minted</S.Text>
            </S.Info>
      </S.NFT>
  </S.Container>
);

export default HomePage;
