import * as S from './style';
import Main from 'components/Main';
import { useEffect, useState } from 'react';
import { Button } from 'web3-components';
type Props = {
  title?: string;
};

const HomePage = ({ title = 'HomePage' }: Props) => {
    const [currentAccount, setCurrentAccount] = useState<any>('');
    const [lastNft, setLastNft] = useState<any>({});

    const checkIfWalletIsConnected = async () => {
        try {
            const { ethereum } = window as any;
            if (!ethereum) throw new Error('Make sure you have metamask!');
            let accounts = await ethereum.request({ method: 'eth_accounts' });
            
            if (!accounts.length) throw new Error('Please, create an account on metamask or authorize it!');
            
            console.log('Found accounts', accounts);
            accounts = accounts[0];
            setCurrentAccount(accounts);
            console.log('Selected account', accounts);
            
        } catch (err: any) {
            console.log('Error found, 404 - ', err.message);
        }
    }


    // @ts-ignore
    useEffect(() => checkIfWalletIsConnected(), []);
    return (
        <S.Container>
          <Main
          lastMintedNft={(d: any) => setLastNft(d)}
            account={ currentAccount }
              action={ setCurrentAccount }  
              title="Fucking NFT Awesome Collection"
              description="Each unique. Each beautiful. Discover your NFT today."
          />
            <S.NFT>
                <S.NFTImage src={lastNft.image || 'https://www.arweave.net/-SQfRmL8LD_8ceC98WUGxAWhkZ1CXn_Q2rNYfGylnng?ext=png'} />
                  
                { lastNft.name && (
                           <S.Info>
                           <S.Text style={{ margin: '4px 0' }}>Last NFT minted</S.Text>
                           <S.Text weight={400} size="16px">{ lastNft.name }</S.Text>
                           <S.Text  weight={100} size="14px">{ lastNft.description }</S.Text>
                           <S.Text style={{ marginBottom: '0px' }} weight={100} size="12px">Creator: {currentAccount}</S.Text>
                                {/* <Button.Transparent onClick={ () => window.open(`https://rinkeby.rarible.com/token/${lastNft.address}:${lastNft.tokenId}`) } color="#FEDA03" border='black' textColor='black' >Check out on Rarible!</Button.Transparent>  */}
                            </S.Info>
                        ) }
                  
            </S.NFT>
        </S.Container>
      );
}

export default HomePage;
