import styled from '@emotion/styled';
import { FC, useState } from 'react';
import { $darkColor, $primaryColor, $tableWidth, rem } from '../../styled/helpers';
import { Container } from '../../styled/GlobalStyles';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { LogoIcon } from '../../icons';
import { Button } from '../../components/UI/Button';
import { MAIN_ROUTE, MY_HOBOS_ROUTE, WALLET_ROUTE, WHITEPAPER_ROUTE } from '../../utils/consts';
import { useResize } from '../../hooks/useResize';
import { useLockedBody } from '../../hooks/useLockedBody';

const links = [
  {
    label: 'Home',
    path: MAIN_ROUTE,
  },
  {
    label: 'My hobos',
    path: MY_HOBOS_ROUTE,
  },
  {
    label: 'Whitepaper',
    path: WHITEPAPER_ROUTE,
  },
];
export const Header: FC = () => {
  const pathname = useLocation().pathname;
  const isMain = pathname === '/' ? 1 : 0;
  const [open, setOpen] = useState(false);
  const [locked, setLocked] = useLockedBody(false, 'root');

  const onClose = () => {
    if (open) {
      setOpen(false);
      setLocked(false);
    }
  };

  const onOpen = () => {
    setOpen(true);
    setLocked(true);
  };

  const isScreenMd = useResize().isScreenMd;
  const isScreenSm = useResize().isScreenSm;

  return (
    <Wrapper onClick={onClose}>
      <Container>
        <Logo open={open} main={isMain} to="/">
          <LogoIcon />
        </Logo>
        <Menu open={open}>
          <NavList>
            {links.map((link) => (
              <li key={link.label}>
                <NavLink to={link.path}>{link.label}</NavLink>
              </li>
            ))}
          </NavList>
          <Button variant={isScreenMd || isScreenSm ? 'primary' : 'secondary'} path={WALLET_ROUTE}>
            Connect Wallet
          </Button>
        </Menu>
        <Burger onClick={onOpen} open={open}>
          <i></i>
          <i></i>
          <i></i>
        </Burger>
      </Container>
    </Wrapper>
  );
};

type LogoProps = {
  main?: number;
  open: boolean;
};

type OpenProps = {
  open: boolean;
};

const Wrapper = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  padding-top: ${rem(24)};
  z-index: 1;
  > * {
    display: flex;
    align-items: center;
  }
`;

const Logo = styled(Link)<LogoProps>`
  position: relative;
  display: block;
  z-index: 1;
  width: ${rem(45)};
  svg {
    width: 100%;
    fill: ${({ main, open }) => (main || open ? '#fff' : $darkColor)};
    transition: fill 0.3s;
  }
`;

const Menu = styled.div<OpenProps>`
  display: flex;
  align-items: center;
  margin-left: auto;
  @media screen and (max-width: ${$tableWidth}) {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    background: #04141a;
    height: ${({ open }) => (open ? '100vh' : '0')};
    width: 100vw;
    overflow: hidden;
    flex-direction: column;
    text-align: center;
    padding-top: ${({ open }) => (open ? rem(120) : '0')};
    transition: padding 0.3s, height 0.3s;
  }
`;

const Burger = styled.div<OpenProps>`
  display: none;
  position: relative;
  z-index: 1;
  cursor: pointer;
  width: ${rem(24)};
  height: ${rem(16)};
  margin-left: auto;
  > * {
    position: absolute;
    display: block;
    background-color: #fff;
    width: ${rem(24)};
    height: ${rem(2)};
    transform-origin: center;
    left: 0;
    transition: all 0.3s;
    &:nth-of-type(1) {
      transform: ${({ open }) =>
        open ? 'translate(-50%, -50%) rotate(45deg)' : 'translateX(-50%) rotate(0)'};
      top: ${({ open }) => (open ? '50%' : '0')};
      left: 50%;
    }
    &:nth-of-type(2) {
      transform: translateY(-50%);
      top: 50%;
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-of-type(3) {
      top: ${({ open }) => (open ? '50%' : '100%')};
      left: 50%;
      transform: ${({ open }) =>
        open ? 'translate(-50%, -50%) rotate(-45deg)' : 'translateX(-50%) rotate(0)'};
    }
  }
  @media screen and (max-width: ${$tableWidth}) {
    display: block;
  }
`;

const NavList = styled.ul`
  display: flex;
  font-weight: 400;
  font-size: ${rem(12)};
  line-height: ${rem(14)};
  color: #000000;
  > * {
    padding: ${rem(10)};
    margin-right: ${rem(32)};
  }
  a {
    position: relative;
    transition: color 0.3s;
    &::before {
      position: absolute;
      content: '';
      bottom: ${rem(-8)};
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: ${rem(2)};
      background-color: ${$darkColor};
      transition: width 0.3s, background-color 0.3s;
    }
    &:hover {
      color: ${$primaryColor};
      &::before {
        background-color: ${$primaryColor};
      }
    }
    &.active {
      &::before {
        width: 120%;
      }
    }
  }
  @media screen and (max-width: ${$tableWidth}) {
    flex-direction: column;
    color: #fff;
    font-size: ${rem(16)};
    line-height: ${rem(18)};
    > * {
      margin-right: 0;
      margin-bottom: ${rem(32)};
    }
  }
`;
