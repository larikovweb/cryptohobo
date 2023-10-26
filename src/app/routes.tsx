import Burn from '../pages/Burn';
import Main from '../pages/Main';
import MyHobos from '../pages/MyHobos';
import { ChangeNetwork, Wallet } from '../pages/WalletPages';
import {
  BURN_ROUTE,
  CHANGE_NETWORK_ROUTE,
  MAIN_ROUTE,
  MY_HOBOS_ROUTE,
  WALLET_ROUTE,
} from '../utils/consts';

export type RouteType = {
  path: string;
  component: JSX.Element;
};

export const publicRoutes: RouteType[] = [
  { path: MAIN_ROUTE, component: <Main /> },
  { path: WALLET_ROUTE, component: <Wallet /> },
  { path: MY_HOBOS_ROUTE, component: <MyHobos /> },
  { path: CHANGE_NETWORK_ROUTE, component: <ChangeNetwork /> },
  { path: BURN_ROUTE, component: <Burn /> },
];
