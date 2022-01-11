import { IRouteProps } from "../typings/router";
import Home from "../views/home/index"
import Test from "../views/test/index"


export default [
  { path: "/", exact: true, component: Home },
  { path: "/home", exact: true, component: Home },
  { path: "/test", exact: true, component: Test },

] as IRouteProps[]