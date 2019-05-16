import { authRoutes } from "./feature/Auth";
import notFoundRoute from "./feature/NotFound/route";
import userRoute from "./feature/Users/route";
import homeRoute from "./feature/Home/route";

const routes = [...authRoutes, userRoute, homeRoute, notFoundRoute];

export default routes;
