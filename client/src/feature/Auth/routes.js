import Signin from "./Signin";
import Signup from "./Signup";
import RestorePassword from "./RestorePassword";

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
  }
];

export default routes;
