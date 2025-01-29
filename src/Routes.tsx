import Home from "./components/Home";
import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "*", element: <NotFound /> },
        ],
    },
]);

export default router;
