import Home from "../containers/Home";
import NotFound from "../containers/NotFound";
import Signin from "../containers/Auth/Signin";
import Signup from "../containers/Auth/Signup";
import RestorePassword from "../containers/Auth/RestorePassword";
import Users from "../containers/Users";

const routes = [
  {
    path: "/",
    component: Signin,
    isAuth: false
  },
  {
    path: "/signup",
    component: Signup,
    isAuth: false
  },
  {
    path: "/restore-password",
    component: RestorePassword,
    isAuth: false
  },
  {
    path: "/home",
    component: Home,
    isAuth: false
  },
  {
    path: "/users",
    component: Users,
    isAuth: false
  },
  {
    component: NotFound,
    isAuth: false
  }
];

export default routes;
