import Home from "./Home";
import Users from "./Users";

export const routes = [
  {
    path: "/home",
    component: Home,
    isAuth: true
  },
  {
    path: "/users",
    component: Users,
    isAuth: true
  }
];
