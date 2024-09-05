import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import ForgotPassword from '../components/Login/ForgotPassword';
import Register from '../components/Login/Register';
import ResetYourPassword from '../components/Login/ResetYourPassword';
import Navbar from '../components/Dashboard/Navbar';
import Arbitrator from '../components/Dashboard/Users/Arbitrator';
import Login from '../components/Login/Login';
import Query from '../components/Query/Query';

import Payment from '../pages/Payment';
import ConsultationForm from '../components/Consultation/ConsultationForm';

const routes = [
  {
    path: "/",
    component: Home,
    title: "Home",
    permittedUser: ['admin'],
    protected:true
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
    path: "/register",
    component: Register,
    title: "Register",
    permittedUser: [],
  },
  {
    path: "/forgot-password",
    component: ForgotPassword,
    title: "ForgotPassword",
    permittedUser: [],
  },
  {
    path: "/reset-your-password/:userId/:hash",
    component: ResetYourPassword,
    title: "Reset Your Password",
    permittedUser: [],
  },
  {
    path: "/register",
    component: Register,
    title: "Register",
    permittedUser: [],
  },
  {
    path: "/forgot-password",
    component: ForgotPassword,
    title: "ForgotPassword",
    permittedUser: [],
  },
  {
    path: "/reset-your-password",
    component: ResetYourPassword,
    title: "Reset Your Password",
    permittedUser: [],
  },
  {
    path: "/arbitrator",
    component: Arbitrator,
    title: "Arbitrator",
    permittedUser: ["admin"],
    protected: true,
  },
  {
    path: "/query",
    component: Query,
    title: "Raise A Ticket",
    permittedUser: [],
    protected: false,
  },
  {
    path: "/book-consultation",
    component: ConsultationForm,
    title: "Book Consultation",
    permittedUser: [],
    protected: false,
  },
  {
    path: "/dashboard",
    component: Navbar,
    title: "Navbar",
    permittedUser: ["admin", "user"],
    protected: true,
  },
  {
    path: "/gateway",
    component: Payment,
    title: "Payment",
    permittedUser: [],
  },
];

export default routes;
