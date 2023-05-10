import {
    createBrowserRouter,
} from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
]);
