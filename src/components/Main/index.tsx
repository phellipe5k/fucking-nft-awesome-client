import * as S from './style';
import { ethers } from "ethers";
import fuckingNftAwesomeJSON from 'utils/fuckingNftAwesome.json';
import { Button } from 'web3-components';
import { useState, useEffect } from 'react';
import Loading from 'components/Loading';
// Icons

type Props = {
  title?: string;
  description?: string;
  illustrationSrc?: string;
  action?: any;
  account?: any;
  lastMintedNft?: any;
};

const Main = ({ title, description, illustrationSrc, action, account, lastMintedNft }: Props) => {
  const [limit, setLimit] = useState('');
  const [loading, setLoading] = useState(false);
  const [lastNftId, setLastNftId] = useState('');
  
  const  CONTRACT_ADDRESS = '0x7652a798B1a7795d0EF4B29B17C831FcB1f44043';
  const connectWallet = async () => {
    try {
        const { ethereum } = window as any;
        if (!ethereum) throw new Error('Make sure you have metamask!');
        
        let chainId = await ethereum.request({ method: 'eth_chainId' });
        console.log("Connected to chain " + chainId);
        
        const rinkebyChainId = "0x4"; 
        if (chainId !== rinkebyChainId) {
          alert("You are not connected to the Rinkeby Test Network!");
        }

        let accounts = await ethereum.request({ method: "eth_requestAccounts" });
        action(accounts[0]);

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
  
        const fuckingNftAwesome = new ethers.Contract(CONTRACT_ADDRESS, fuckingNftAwesomeJSON.abi, signer); 
        
        let limit = await fuckingNftAwesome.getLimitMints();
        setLimit(limit.toNumber());
      } catch(err: any) {
          alert(`Error found, 404 - ${ err?.message }`);
      }
  }

  const askContractToMintNft = async () => {
    try {
      const { ethereum } = window as any;
      if (!ethereum) throw new Error('Metamask was not found!');    
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      const fuckingNftAwesome = new ethers.Contract(CONTRACT_ADDRESS, fuckingNftAwesomeJSON.abi, signer); 
      
      let limit = await fuckingNftAwesome.getLimitMints();
      setLimit(limit.toNumber());
      let nftTxn = await fuckingNftAwesome.makeAFuckingNFT();
      console.log('Mining... please wait.');
      setLoading(true);
      await nftTxn.wait();
      console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);
  
      fuckingNftAwesome.on("NewEpicNFTMinted", (from: any, tokenId: any, data: any) => {
        let base64 = data.split('base64,')[1];
        lastMintedNft({...JSON.parse(atob(base64)), address: CONTRACT_ADDRESS, tokenId})
        setLoading(false);
        setLastNftId(tokenId.toNumber() + 1);
      })
    } catch (err: any) {
      console.log(`Error found 404 -  ${ err?.message }`)
    }
  }

  return (
    <S.Container>
      { loading && <Loading /> }
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      { account ? (
          <>
          <Button.BorderGradient onClick={ () => askContractToMintNft() } color={'#20083B'} gradientColors={'#ec4899, #6366f1'}>Mint a Fucking NFT</Button.BorderGradient>
          <Button.Gradient onClick={ () => window.open(`https://rinkeby.rarible.com/collection/${CONTRACT_ADDRESS}/items`) } gradientColors={'#ec4899, #6366f1'}>See the whole collection</Button.Gradient>
          {limit && <span style={{fontSize: 12}}> Limit minted NFTs - {lastNftId} / { limit }</span>}
          </>
     )
      : <Button.Gradient onClick={ () => connectWallet() } gradientColors={'#ec4899, #6366f1'}>Connect to wallet</Button.Gradient>
      }  
    </S.Container>
  );
}

export default Main;
