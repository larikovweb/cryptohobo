import { FC, useState } from 'react';
import StaticHobo from '../assets/img/hobo.png';
import styled from '@emotion/styled';
import { $darkColor, $phoneWidth, $primaryColor, $tableWidth, rem } from '../styled/helpers';
import { Container } from '../styled/GlobalStyles';
import { ArrowIcon } from '../icons';

const hobos = [
  {
    id: 1,
    name: 'hobo #5001',
    img: StaticHobo,
    features: [
      { label: 'Table', value: 'Home', rare: '3%' },
      { label: 'EYE', value: 'Home', rare: '3%' },
      { label: 'Head', value: 'Home', rare: '3%' },
      { label: 'Beard', value: 'Home', rare: '3%' },
      { label: 'Underwear', value: 'Home', rare: '3%' },
      { label: 'outwear', value: 'Home', rare: '3%' },
      { label: 'Body', value: 'Home', rare: '3%' },
      { label: 'Location', value: 'Home', rare: '3%' },
    ],
  },
  {
    id: 2,
    name: 'hobo #5002',
    img: StaticHobo,
    features: [
      { label: 'Table', value: 'Home', rare: '4%' },
      { label: 'EYE', value: 'Home', rare: '4%' },
      { label: 'Head', value: 'Home', rare: '4%' },
      { label: 'Beard', value: 'Home', rare: '4%' },
      { label: 'Underwear', value: 'Home', rare: '4%' },
      { label: 'outwear', value: 'Home', rare: '4%' },
      { label: 'Body', value: 'Home', rare: '4%' },
      { label: 'Location', value: 'Home', rare: '4%' },
    ],
  },
  {
    id: 3,
    name: 'hobo #5003',
    img: StaticHobo,
    features: [
      { label: 'Table', value: 'Home', rare: '3%' },
      { label: 'EYE', value: 'Home', rare: '3%' },
      { label: 'Head', value: 'Home', rare: '3%' },
      { label: 'Beard', value: 'Home', rare: '3%' },
      { label: 'Underwear', value: 'Home', rare: '3%' },
      { label: 'outwear', value: 'Home', rare: '3%' },
      { label: 'Body', value: 'Home', rare: '3%' },
      { label: 'Location', value: 'Home', rare: '3%' },
    ],
  },
  {
    id: 4,
    name: 'hobo #5004',
    img: StaticHobo,
    features: [
      { label: 'Table', value: 'Home', rare: '3%' },
      { label: 'EYE', value: 'Home', rare: '3%' },
      { label: 'Head', value: 'Home', rare: '3%' },
      { label: 'Beard', value: 'Home', rare: '3%' },
      { label: 'Underwear', value: 'Home', rare: '3%' },
      { label: 'outwear', value: 'Home', rare: '3%' },
      { label: 'Body', value: 'Home', rare: '3%' },
      { label: 'Location', value: 'Home', rare: '3%' },
    ],
  },
];

const MyHobos: FC = () => {
  const [selectedHobo, setSelectedHobo] = useState(hobos[0]);
  const [openTrial, setOpenTrial] = useState(false);

  return (
    <Wrapper>
      <div>
        <Title style={{ color: '#fff' }}>Your Hobos</Title>
        <ListWrap>
          {hobos.map((hobo) => (
            <ListItem
              selected={selectedHobo.id === hobo.id ? 1 : 0}
              onClick={() => setSelectedHobo(hobo)}
              key={hobo.id}>
              <img src={hobo.img} alt={hobo.name} />
              <span>{hobo.name}</span>
            </ListItem>
          ))}
        </ListWrap>
      </div>
      <InfoHobo>
        <Scroll>
          <Name>{selectedHobo.name}</Name>
          <Img src={selectedHobo.img} alt={selectedHobo.name} />
          <MobileBtn onClick={() => setOpenTrial((state) => !state)} open={openTrial}>
            <span>Trail</span> <ArrowIcon />
          </MobileBtn>
          <InfoList open={openTrial}>
            {selectedHobo.features.map((feature) => (
              <InfoItem key={feature.label}>
                <span>{feature.label}</span>
                <b>{feature.value}</b>
                <i>{feature.rare} rarity</i>
              </InfoItem>
            ))}
          </InfoList>
        </Scroll>
      </InfoHobo>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${rem(24)};
  @media screen and (max-width: ${$tableWidth}) {
    grid-template-columns: 1fr;
    gap: ${rem(32)};
    > *:first-of-type {
      order: 2;
    }
  }
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: 200%;
  text-align: center;
  @media screen and (max-width: ${$phoneWidth}) {
    display: none;
  }
`;

const ListWrap = styled.div`
  margin-top: ${rem(32)};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${rem(16)};
  @media screen and (max-width: ${$phoneWidth}) {
    gap: ${rem(8)};
    margin-top: 0;
  }
`;

type ListItemProps = {
  selected: number;
};

const ListItem = styled.div<ListItemProps>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: ${rem(16)} ${rem(24)};
  text-align: center;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ selected }) =>
      selected ? 'rgba(149, 239, 218, 0.32)' : 'rgba(149, 239, 218, 0.08)'};
    border: 1px solid rgba(149, 239, 218, 0.24);
    backdrop-filter: blur(12px);
    border-radius: ${rem(16)};
    z-index: -1;
    transition: background 0.3s;
  }
  img {
    width: ${rem(128)};
    height: ${rem(128)};
    margin-bottom: ${rem(24)};
  }
  span {
    font-weight: 400;
    font-size: ${rem(12)};
    line-height: 200%;
    color: ${({ selected }) => (selected ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.5)')};
    transition: color 0.3s;
  }
  @media screen and (max-width: ${$phoneWidth}) {
    padding: ${rem(16)};
    img {
      width: ${rem(56)};
      height: ${rem(56)};
      margin-bottom: ${rem(8)};
    }
    span {
      font-size: ${rem(8)};
    }
  }
`;

const Scroll = styled.div`
  max-height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${rem(24)} ${rem(32)} ${rem(40)} ${rem(32)};
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
  @media screen and (max-width: ${$phoneWidth}) {
    max-height: none;
    overflow-y: visible;
  }
`;

const InfoHobo = styled.div`
  position: sticky;
  top: 0;
  height: fit-content;

  &::before {
    position: absolute;
    content: '';
    background: rgba(149, 239, 218, 0.32);
    border: 1px solid rgba(149, 239, 218, 0.4);
    backdrop-filter: blur(16px);
    border-radius: ${rem(16)};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  @media screen and (max-width: ${$tableWidth}) {
    position: relative;
    order: 1;
  }
`;

const Name = styled.div`
  font-weight: 400;
  font-size: ${rem(18)};
  line-height: 200%;
  color: ${$darkColor};
  margin-bottom: ${rem(8)};
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: ${rem(18)};
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

type OpenProp = {
  open: boolean;
};

const MobileBtn = styled.div<OpenProp>`
  cursor: pointer;
  display: none;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  font-size: ${rem(16)};
  color: #fff;
  line-height: 200%;
  margin-bottom: ${({ open }) => (open ? rem(16) : 0)};
  transition: margin 0.3s;
  svg {
    width: ${rem(24)};
    height: ${rem(24)};
    transform: ${({ open }) => (open ? 'scale(1, 1)' : 'scale(1, -1)')};
    transition: transform 0.3s;
  }
  @media screen and (max-width: ${$tableWidth}) {
    display: flex;
  }
`;

const InfoList = styled.div<OpenProp>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${rem(12)};
  width: 100%;
  @media screen and (max-width: ${$tableWidth}) {
    overflow: hidden;
    max-height: ${({ open }) => (open ? '28rem' : '0')};
    transition: max-height 0.3s;
  }
  @media screen and (max-width: ${$phoneWidth}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${rem(8)};
  }
`;

const InfoItem = styled.div`
  height: ${rem(136)};
  background: rgba(5, 20, 26, 0.44);
  border-radius: ${rem(10)};
  padding: ${rem(12)} ${rem(16)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  span {
    font-weight: 400;
    font-size: ${rem(10)};
    line-height: ${rem(16)};
    color: ${$primaryColor};
    opacity: 0.5;
  }
  b {
    font-weight: 400;
    font-size: ${rem(12)};
    line-height: ${rem(27)};
    color: #fff;
  }
  i {
    font-weight: 400;
    font-size: ${rem(8)};
    line-height: ${rem(16)};
    opacity: 0.5;
    color: #fff;
  }
  @media screen and (max-width: ${$phoneWidth}) {
    padding: ${rem(12)} ${rem(8)};
    height: ${rem(100)};
  }
`;

export default MyHobos;
