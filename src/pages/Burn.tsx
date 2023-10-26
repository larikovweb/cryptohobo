import React, { FC, useState } from 'react';
import ModalLayout from '../components/ModalLayout';
import { Button } from '../components/UI/Button';
import styled from '@emotion/styled';
import { $phoneWidth, $primaryColor, rem } from '../styled/helpers';
import { MAIN_ROUTE } from '../utils/consts';

const Burn: FC = () => {
  const [congratulations, setCongratulations] = useState(false);

  return (
    <ModalLayout>
      {congratulations ? (
        <>
          <Title>Congratulations, you have received 50,000 USDT</Title>
          <Button path={MAIN_ROUTE} variant="primary">
            Great!
          </Button>
        </>
      ) : (
        <>
          <Title>Burn HOBO #1632 and get 50,000 USDT</Title>
          <Button onClick={() => setCongratulations(true)} variant="primary">
            Burn
          </Button>
        </>
      )}
    </ModalLayout>
  );
};

const Title = styled.h1`
  color: ${$primaryColor};
  font-weight: 400;
  font-size: ${rem(20)};
  line-height: 200%;
  margin-bottom: ${rem(40)};
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: ${rem(15)};
  }
`;

export default Burn;
