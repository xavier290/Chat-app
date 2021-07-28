import React from "react";

const Login = React.lazy(() => import("./layout/login"));
const Register = React.lazy(() => import("./layout/register"));

const routes = [
  {
    enabled: true,
    path: "/login",
    component: Login,
    child: null,
  },
  {
    enabled: true,
    path: "/register",
    component: Register,
    child: null,
  },
];

export default routes.filter((route) => route.enabled);
