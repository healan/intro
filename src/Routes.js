import Main from "./views/Main";
import Home from "./component/Home";
import Intro from "./component/Intro";
import Skills from "./component/Skills";

const routes = [
  {
    path: "/",
    name: "main",
    element: Main,
  },
  {
    path: "/home",
    name: "home",
    element: Home,
  },
  {
    path: "/intro",
    name: "intro",
    element: Intro,
  },
  {
    path: "/skills",
    name: "skills",
    element: Skills,
  },
];
export default routes;
