import Home from "./components/Home";
import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound";
import { createBrowserRouter } from "react-router-dom";
import Store from "./pages/Store";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/store", element: <Store /> },
      { path: "/products/:id", element: <ProductPage /> },
      { path: "/cart", element: <Cart /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
