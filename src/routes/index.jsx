import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Dashboard from '../pages/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import Login from '../Login/Login';
import ConsultationForm from '../components/Consultation/ConsultationForm';
import Query from '../components/Query/Query';

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
    path: "/consultationForm",
    component: ConsultationForm,
    title: "ConsultationForm",
    permittedUser: ["admin"],
    protected: true,
  },
  {
    path: "/query",
    component: Query,
    title: "Query",
    permittedUser: ["admin"],
    protected: true,
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
