import styled from '@emotion/styled';
import { FC, useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { MainBg } from '../../assets/img';
import { fadeIn } from '../../styled/GlobalStyles';
import { rem } from '../../styled/helpers';

export const Layout: FC = () => {
  const pathname = useLocation().pathname;

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const isMain = pathname === '/';

  return (
    <>
      <Bg blur={isMain ? 0 : 1}>
        <img src={MainBg} alt="background" />
      </Bg>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${rem(32)} 0;
`;

type StyledProps = {
  blur: number;
};

const Bg = styled.div<StyledProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  animation: ${fadeIn} 0.5s ease;
  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: ${({ blur }) => (blur ? 'translate(-50%, -50%)' : 'translate(-150%, -50%)')};
    content: '';
    width: 100%;
    height: 100%;
    background: rgba(239, 149, 188, 0.32);
    backdrop-filter: blur(16px);
    z-index: 1;
    transition: transform 0.3s ease-in;
  }
  img {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    object-position: center;
  }
`;
