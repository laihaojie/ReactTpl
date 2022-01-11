import { IRouteProps } from "../typings/router";
import Home from "../views/home/index"
import Login from "../views/login/index"
import Test from "../views/test/index"
import Menu from "../views/menu/menu"


export default [
  { path: "/", exact: true, component: Home },
  { path: "/home", exact: true, component: Home },
  { path: "/login", exact: true, component: Login },
  { path: "/menu", exact: true, component: Menu },
  { path: "/test", exact: true, component: Test },

] as IRouteProps[]