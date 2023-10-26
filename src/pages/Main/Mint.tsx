import React, { FC, useEffect, useState } from 'react';
import { $phoneWidth, $primaryColor, rem } from '../../styled/helpers';
import styled from '@emotion/styled';
import { LoaderIcon } from '../../icons';
import { Button } from '../../components/UI/Button';
import Winner from './Winner';
import YouWon from './YouWon';
import { TOTAL_NFT } from '../../utils/consts';

type Props = {
  onClick: (e: any) => void;
};
const Mint: FC<Props> = ({ onClick }) => {
  const [count, setCount] = useState<string | number>(10000);
  const [isPending, setPending] = useState(false);
  const isFinal = +count === 0;
  const isWin = true;

  useEffect(() => {
    if (+count <= 0) {
      setCount(0);
      return;
    }
    const interval = setInterval(() => {
      setCount(+count - Math.floor(Math.random() * 5000) + 1);
    }, 3000);
    return () => clearInterval(interval);
  });

  const counts = count
    .toString()
    .split('')
    .map((item, i) => <li key={i}>{item}</li>);

  const emptyCounts =
    count.toString().length < TOTAL_NFT.toString().length &&
    '0'
      .repeat(5 - count.toString().length)
      .split('')
      .map((item, i) => <li key={i}>{item}</li>);

  const progress = 100 - (+count / TOTAL_NFT) * 100;

  return (
    <>
      {!isFinal ? (
        <>
          <Descr>From a collection of 10,000 unique crypto hobo, it remains to be minted:</Descr>
          <Progress>
            <i style={{ width: `${progress}%` }} />
          </Progress>
          <Counts>
            {emptyCounts}
            {counts}
          </Counts>
          <Button
            onClick={() => {
              setPending(true);
              setTimeout(() => {
                onClick(true);
              }, 1000);
            }}
            isBig={true}
            variant={isPending ? 'secondary' : 'primary'}
            disabled={isPending}>
            {isPending ? (
              <>
                Minting <LoaderIcon />
              </>
            ) : (
              'Mint'
            )}
          </Button>
          <Price>
            <span>mint price</span>
            <b>20 usdt</b>
          </Price>
        </>
      ) : (
        <>{isWin ? <YouWon /> : <Winner />}</>
      )}
    </>
  );
};

const Descr = styled.p`
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: 200%;
  margin-bottom: ${rem(40)};
  text-align: center;
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: ${rem(12)};
    color: #fff;
  }
`;

const Progress = styled.div`
  position: relative;
  width: 100%;
  height: ${rem(4)};
  background: rgba(5, 20, 26, 0.24);
  margin-bottom: ${rem(40)};
  overflow: hidden;
  i {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: ${$primaryColor};
    transition: width 0.3s;
  }
`;

const Counts = styled.ul`
  display: flex;
  justify-content: center;
  text-align: center;
  color: #fff;
  margin-bottom: ${rem(40)};
  > * {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(5, 20, 26, 0.4);
    border: 1px solid rgba(5, 20, 26, 0.16);
    border-radius: ${rem(16)};
    width: ${rem(96)};
    height: ${rem(96)};
    font-weight: 400;
    font-size: ${rem(24)};
    line-height: ${rem(28)};

    &:not(:last-child) {
      margin-right: ${rem(8)};
    }
    &:nth-of-type(2) {
      margin-right: ${rem(24)};
    }
  }
  @media screen and (max-width: ${$phoneWidth}) {
    > * {
      width: ${rem(48)};
      height: ${rem(48)};
      font-size: ${rem(16)};
      line-height: ${rem(18)};
      border-radius: ${rem(8)};
      &:not(:last-child) {
        margin-right: ${rem(2)};
      }
      &:nth-of-type(2) {
        margin-right: ${rem(19)};
      }
    }
  }
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${rem(16)};
  text-align: right;
  margin-left: auto;
  span {
    color: #fff;
    font-weight: 400;
    font-size: ${rem(12)};
    line-height: 200%;
    margin-right: ${rem(16)};
  }
  b {
    font-weight: 400;
    font-size: ${rem(16)};
    line-height: 200%;
    color: ${$primaryColor};
  }
  @media screen and (max-width: ${$phoneWidth}) {
    flex-direction: column;
    align-items: flex-start;
    align-self: flex-start;
    text-align: left;
    margin-left: 0;
    b {
      font-size: ${rem(18)};
    }
  }
`;

export default Mint;
