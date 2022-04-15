import styled from 'styled-components';

export const Container = styled.main`
  color: #fff;
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 3%;
  text-align: center;
  justify-content: center;
  align-items: center;

  button {
    color: white;
    font-size: 12pt;
  }
`;

export const Logo = styled.img`
  width: 25rem;
`;

export const Title = styled.h1`
  font-size: 4rem;
  padding: 2% 0;
`;

export const Description = styled.p`
  font-size: 2rem;
  padding: 2% 0;
  width: 60%;
`;

export const Illustration = styled.img`
  width: min(35rem, 100%);
  background-color: white;
  padding: 0.5%;
  border-radius: 15px;
`;
