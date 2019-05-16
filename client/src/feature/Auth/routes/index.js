import Signin from "../containers/Signin";
import Signup from "../containers/Signup";
import RestorePassword from "../containers/RestorePassword";

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
