import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import About from "./pages/About";
import Legal from "./pages/Legal";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { CustomerLayout } from "./layout/CustomerLayout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <CustomerLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/careers", element: <Careers /> },
      { path: "/about", element: <About /> },
      { path: "/terms of service", element: <Legal /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/contact", element: <Contact /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/categories/:name", element: <Category /> },
      { path: "/products/:name", element: <Product /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
    ],
  },
]);
