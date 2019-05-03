import Main from "../containers/Main";
import NotFound from "../containers/NotFound";
import Signin from "../containers/Auth/Signin";
import Signup from "../containers/Auth/Signup";
import RestorePassword from "../containers/Auth/RestorePassword";

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
    path: "/main",
    component: Main,
    isAuth: false
  },
  {
    component: NotFound,
    isAuth: false
  }
];

export default routes;
