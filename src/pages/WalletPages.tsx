import { FC, useState } from 'react';
import { Button } from '../components/UI/Button';
import { LoaderIcon } from '../icons';
import styled from '@emotion/styled';
import { $primaryColor, rem } from '../styled/helpers';
import ModalLayout from '../components/ModalLayout';

export const Wallet: FC = () => {
  const [isPending, setPending] = useState(false);

  return (
    <ModalLayout>
      <Title>Connect Wallet</Title>
      <Buttons>
        {isPending ? (
          <Loader>
            <LoaderIcon />
          </Loader>
        ) : (
          <>
            <Button onClick={() => setPending(true)} variant="primary">
              Connect Wallet
            </Button>
            <Button onClick={() => setPending(true)} variant="primary">
              Walletconnect
            </Button>
          </>
        )}
      </Buttons>
    </ModalLayout>
  );
};

export const ChangeNetwork: FC = () => {
  return (
    <ModalLayout>
      <Title>Crypto Hotbox exists on the ERC-20 network</Title>
      <Buttons>
        <Button variant="primary">Change Network</Button>
      </Buttons>
    </ModalLayout>
  );
};

const Title = styled.h1`
  color: ${$primaryColor};
  font-weight: 400;
  font-size: ${rem(20)};
  line-height: 200%;
  margin-bottom: ${rem(40)};
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > * {
    width: 100%;
    &:not(:last-child) {
      margin-bottom: ${rem(16)};
    }
  }
`;

const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${rem(88)};
  height: ${rem(108)};
  svg {
    width: 100%;
  }
`;
