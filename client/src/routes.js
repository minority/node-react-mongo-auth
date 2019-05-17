import { authRoutes } from "./feature/Auth";
import notFoundRoute from "./feature/NotFound/route";
import { cabinetRoutes } from "./feature/Cabinet";

const routes = [...authRoutes, ...cabinetRoutes, notFoundRoute];

export default routes;
