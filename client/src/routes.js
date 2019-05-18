import { authRoutes } from "./feature/Auth";
import { notFoundRoute } from "./feature/NotFound";
import { cabinetRoutes } from "./feature/Cabinet";

export const routes = [...authRoutes, ...cabinetRoutes, notFoundRoute];
