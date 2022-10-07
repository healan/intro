import Main from './views/Main';
import Test from './views/Test';

var routes = [
    {
      path: "/",
      name: "main",
      element: Main,
    },
    {
        path: "/test",
        name: "test",
        element: Test,
      },

  ];
  export default routes;