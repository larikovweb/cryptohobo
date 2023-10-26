import styled from '@emotion/styled';
import React, { FC } from 'react';
import { $darkColor, rem } from '../styled/helpers';
import { CloseIcon } from '../icons';
import { useNavigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};
const ModalLayout: FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Close onClick={() => navigate(-1)}>
        <CloseIcon />
      </Close>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  background-color: ${$darkColor};
  padding: ${rem(16)} ${rem(32)} ${rem(40)};
  border: 1px solid rgba(239, 149, 188, 0.4);
  border-radius: ${rem(16)};
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${rem(567)};
`;

const Close = styled.div`
  width: ${rem(24)};
  height: ${rem(24)};
  margin-left: auto;
  cursor: pointer;

  svg {
    fill: #fff;
    width: 100%;
  }
`;

export default ModalLayout;
