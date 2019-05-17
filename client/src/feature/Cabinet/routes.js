import Home from "./Home";
import Users from "./Users";

const routes = [
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

export default routes;
