import styled, { css } from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #20083B;
`;

export const NFT = styled.section`
  font-size: 4rem;
  padding: 2% 0;
  width: 27%;
  position:  relative;
`;


export const NFTImage = styled.img`
    width: 90%;
    border-radius: 25px;
`;


export const Text = styled.p<{ size?: any, weight?: any }>`
    ${({ size, weight }) => css`
        font-size: ${ size || '17pt' };
        font-weight: ${ weight || '600' } ;
        color: white;
        margin: 4px 6px;
    `}
`;

export const Info = styled.div`
    background: linear-gradient(90deg,hsla(0,0%,100%,0) -1.52%,hsla(0,0%,100%,.024) 104.35%),rgba(162,96,243,.3);
    backdrop-filter: blur(10px);
    width: 80%;
    padding: 2% 4%;
    height: 180px;
    position: absolute;
    bottom: -20px;
    left: -35px;
    border-radius: 15px;
    border: 2px solid white;
`;