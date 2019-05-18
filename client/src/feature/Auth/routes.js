import { SigninContainer } from "./Signin";
import { SignupContainer } from "./Signup";
import { RestorePasswordContainer } from "./RestorePassword";
import { ConfirmRestorePasswordContainer } from "./ConfirmRestorePassword";

export const routes = [
  {
    path: "/",
    component: SigninContainer,
    isAuth: false
  },
  {
    path: "/signup",
    component: SignupContainer,
    isAuth: false
  },
  {
    path: "/restore-password",
    component: RestorePasswordContainer,
    isAuth: false
  },
  {
    path: "/confirm-restore-password/:token",
    component: ConfirmRestorePasswordContainer,
    isAuth: false
  }
];
