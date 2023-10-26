import { FC, useState } from 'react';
import styled from '@emotion/styled';
import { $darkColor, $phoneWidth, $primaryColor, $tableWidth, rem } from '../../styled/helpers';
import { Container } from '../../styled/GlobalStyles';
import Mint from './Mint';
import Receiving from './Receiving';

const Main: FC = () => {
  const [isReceiving, setReceiving] = useState(false);

  return (
    <Wrapper>
      <Title>
        <h1>
          Crypto <br /> <b>hobo</b>
        </h1>
        <Prize>
          <span>prize:</span>
          <b>50 000 USDT</b>
        </Prize>
        <Descr>
          The winner will be determined after <br /> the last NFT is minted
        </Descr>
      </Title>
      <Block>
        {isReceiving ? <Receiving /> : <Mint onClick={(e: boolean) => setReceiving(e)} />}
      </Block>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: ${$tableWidth}) {
    flex-direction: column;
    text-align: center;
  }
`;

const Title = styled.div`
  h1 {
    color: #fff;
    font-weight: 400;
    font-size: ${rem(74)};
    line-height: 140%;
    margin-bottom: ${rem(64)};
    b {
      color: ${$primaryColor};
    }
  }
  @media screen and (max-width: ${$phoneWidth}) {
    h1 {
      font-size: ${rem(36)};
      line-height: 180%;
      margin-bottom: ${rem(32)};
    }
  }
`;

const Prize = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: ${$darkColor};
  padding: ${rem(32)} 0;
  span {
    font-weight: 400;
    font-size: ${rem(16)};
    line-height: ${rem(18)};
    margin-right: ${rem(24)};
  }
  b {
    font-weight: 400;
    font-size: ${rem(24)};
    line-height: ${rem(28)};
  }
  &::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    width: calc(100% + 5rem);
    height: 100%;
    background: ${$primaryColor};
    z-index: -1;
  }
  @media screen and (max-width: ${$tableWidth}) {
    justify-content: center;
    &::before {
      width: 100vw;
      right: auto;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  @media screen and (max-width: ${$phoneWidth}) {
    padding: ${rem(24)} 0;
    flex-direction: column;
    align-items: center;
    span {
      margin-right: 0;
      font-weight: 400;
      font-size: ${rem(8)};
      line-height: ${rem(9)};
      margin-bottom: ${rem(8)};
    }
    b {
      font-size: ${rem(16)};
      line-height: ${rem(18)};
    }
  }
`;

const Descr = styled.p`
  color: #fff;
  font-weight: 400;
  font-size: ${rem(12)};
  line-height: 200%;
  margin-top: ${rem(32)};
  @media screen and (max-width: ${$tableWidth}) {
    margin-bottom: ${rem(32)};
  }
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${rem(40)} ${rem(32)};
  max-width: ${rem(628)};
  width: 100%;
  position: relative;
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(239, 149, 188, 0.32);
    border: 1px solid rgba(239, 149, 188, 0.4);
    backdrop-filter: blur(16px);
    border-radius: ${rem(16)};
    z-index: -1;
  }
  button,
  a {
    width: 100%;
  }
`;

export default Main;
