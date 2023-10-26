import { FC } from 'react';
import { Button } from '../../components/UI/Button';
import styled from '@emotion/styled';
import { $phoneWidth, $primaryColor, rem } from '../../styled/helpers';
import StaticHobo from '../../assets/img/hobo.png';
import { MY_HOBOS_ROUTE } from '../../utils/consts';

const Receiving: FC = () => {
  return (
    <>
      <Title>Congratulations!</Title>
      <Descr> Now you're a crypto hobo</Descr>
      <Img src={StaticHobo} alt="hobo" />
      <Name>hobo #5000</Name>
      <Button path={MY_HOBOS_ROUTE} variant="primary">
        Great!
      </Button>
    </>
  );
};

const Title = styled.div`
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: 200%;
  margin-bottom: ${rem(8)};
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: ${rem(12)};
    color: ${$primaryColor};
  }
`;

const Descr = styled.div`
  font-weight: 400;
  font-size: ${rem(12)};
  line-height: 200%;
  margin-bottom: ${rem(8)};
  color: #fff;
`;

const Img = styled.img`
  width: ${rem(272)};
  height: ${rem(272)};
  margin-bottom: ${rem(8)};
  @media screen and (max-width: ${$phoneWidth}) {
    width: ${rem(249)};
    height: ${rem(249)};
  }
`;

const Name = styled.div`
  font-weight: 400;
  font-size: ${rem(8)};
  line-height: 200%;
  color: #fff;
  margin-bottom: ${rem(32)};
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: ${rem(16)};
  }
`;

export default Receiving;
