import styled from '@emotion/styled';
import { ButtonHTMLAttributes, FC } from 'react';
import { $darkColor, $primaryColor, rem } from '../../styled/helpers';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';

type Props = {
  children: React.ReactNode;
  path?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  isBig?: boolean;
  disabled?: boolean;
};
export const Button: FC<Props> = (props) => {
  const { children, isBig, path, variant, onClick } = props;
  const navigate = useNavigate();

  const onClickBtn = () => {
    onClick && onClick();
    path && navigate(path);
  };

  return (
    <BtnWrap {...props} variant={variant} isBig={isBig} onClick={onClickBtn}>
      {children}
    </BtnWrap>
  );
};

type StyledProps = {
  variant?: 'primary' | 'secondary';
  isBig?: boolean;
};

export const BtnWrap = styled.button<StyledProps>`
  cursor: pointer;
  font-weight: 400;
  font-size: ${rem(12)};
  line-height: 120%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${$primaryColor};
  padding: ${rem(16)} ${rem(24)};
  background: ${$darkColor};
  border-radius: ${rem(8)};
  opacity: 1;
  transition: 0.3s opacity, background-color 0.3s, color 0.3s;
  &:disabled {
    pointer-events: none;
  }
  ${({ variant }) =>
    variant === 'primary' &&
    css`
      background: ${$primaryColor};
      color: ${$darkColor};
    `}
  ${({ isBig }) =>
    isBig &&
    css`
      height: ${rem(85)};
      font-size: ${rem(18)};
      svg {
        width: ${rem(48)};
        height: ${rem(48)};
        fill: ${$primaryColor};
        margin-left: ${rem(8)};
      }
    `}
  &:hover {
    opacity: 0.9;
  }
`;
