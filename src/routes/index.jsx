import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Dashboard from '../pages/Dashboard';
import Login from '../components/Login/Login';
import ConsultationForm from '../components/Consultation/ConsultationForm';
import ForgotPassword from '../components/Login/ForgotPassword';
import Query from '../components/Query/Query';
import Register from '../components/Login/Register';

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
  // {
  //   path: "/register",
  //   component: Register,
  //   title: "Register",
  //   permittedUser: [],
  // },
  {
    path: "/forgot-password",
    component: ForgotPassword,
    title: "ForgotPassword",
    permittedUser: [],
  },
  {
    path: "/register",
    component: Register,
    title: "Register",
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
