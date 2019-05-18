import { SigninContainer } from "./Signin";
import { SignupContainer } from "./Signup";
import { RestorePasswordContainer } from "./RestorePassword";
import { ConfirmRestorePasswordContainer } from "./ConfirmRestorePassword";

export const routes = [
  {
    path: "/",
    component: SigninContainer,
    isAuth: false,
    exact: true
  },
  {
    path: "/signup",
    component: SignupContainer,
    isAuth: false,
    exact: true
  },
  {
    path: "/restore-password",
    component: RestorePasswordContainer,
    isAuth: false,
    exact: true
  },
  {
    path: "/confirm-restore-password/:token",
    component: ConfirmRestorePasswordContainer,
    isAuth: false,
    exact: true
  }
];
