import { FC } from 'react';
import { Button } from '../../components/UI/Button';
import StaticHobo from '../../assets/img/hobo.png';
import { $darkColor, $phoneWidth, rem } from '../../styled/helpers';
import styled from '@emotion/styled';
import { BURN_ROUTE } from '../../utils/consts';

const YouWon: FC = () => {
  return (
    <>
      <Title>you won!</Title>
      <Descr>
        To get 50,000 USDT, you have to <br /> burn the prize NFT
      </Descr>
      <Button path={BURN_ROUTE} variant="primary">
        Burn and get a prize
      </Button>
      <Img src={StaticHobo} alt="hobo" />
      <Name>hobo #5000</Name>
    </>
  );
};

const Title = styled.div`
  font-weight: 400;
  font-size: ${rem(32)};
  line-height: 200%;
  color: ${$darkColor};
  margin-bottom: ${rem(8)};
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: ${rem(24)};
    color: #fff;
    margin-bottom: ${rem(32)};
  }
`;

const Descr = styled.div`
  font-weight: 400;
  font-size: ${rem(12)};
  line-height: 200%;
  margin-bottom: ${rem(8)};
  text-align: center;
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: ${rem(10)};
    color: #fff;
    margin-bottom: ${rem(32)};
  }
`;

const Img = styled.img`
  width: ${rem(272)};
  height: ${rem(272)};
  margin-bottom: ${rem(8)};
  @media screen and (max-width: ${$phoneWidth}) {
    width: ${rem(249)};
    height: ${rem(249)};
    margin-top: ${rem(24)};
  }
`;

const Name = styled.div`
  font-weight: 400;
  font-size: ${rem(8)};
  line-height: 200%;
  color: #fff;
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: ${rem(16)};
  }
`;

export default YouWon;
