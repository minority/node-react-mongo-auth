import { HomeContainer } from "./Home";
import { UsersContainer } from "./Users";

export const routes = [
  {
    path: "/home",
    component: HomeContainer,
    isAuth: true,
    exact: true
  },
  {
    path: "/users",
    component: UsersContainer,
    isAuth: true,
    exact: true
  }
];
