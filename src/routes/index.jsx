import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import ProtectedRoute from './ProtectedRoute';

const routes = [
  {
    path: "/",
    component: Home,
    title: "Home",
    permittedUser: [],
  },
  {
    path: "/about",
    component: About,
    title: "About",
    permittedUser: [],
  },
  {
    path: "/contact",
    component: Contact,
    title: "Contact",
    permittedUser: [],
  },
  {
    path: "/login",
    component: Login,
    title: "Login",
    permittedUser: [],
  },
  {
    path: "/dashboard",
    component: Dashboard,
    title: "Dashboard",
    permittedUser: ["admin", "user"],
    protected: true,
  },
];

export default routes;
