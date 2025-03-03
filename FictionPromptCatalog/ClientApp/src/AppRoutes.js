import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/sign-up',
    element: <SignUp />
  },
  {
    path: '/login',
    element: <Login />
  }
];

export default AppRoutes;
