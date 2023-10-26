import { FC } from 'react';
import StaticHobo from '../../assets/img/hobo.png';
import styled from '@emotion/styled';
import { $phoneWidth, rem } from '../../styled/helpers';
import { Button } from '../../components/UI/Button';
const Winner: FC = () => {
  return (
    <>
      <Title>Winner</Title>
      <Img src={StaticHobo} alt="hobo" />
      <Name>hobo #5000</Name>
      <a href="/" target="_blank">
        <Button variant="secondary">view</Button>
      </a>
    </>
  );
};

const Title = styled.div`
  font-weight: 400;
  font-size: ${rem(32)};
  line-height: 200%;
  margin-bottom: ${rem(8)};
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: ${rem(24)};
    color: #fff;
  }
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

export default Winner;
