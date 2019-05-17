import Signin from "./Signin";
import Signup from "./Signup";
import RestorePassword from "./RestorePassword";
import ConfirmRestorePassword from "./ConfirmRestorePassword";

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
    path: "/confirm-restore-password/:token",
    component: ConfirmRestorePassword,
    isAuth: false
  }
];

export default routes;
