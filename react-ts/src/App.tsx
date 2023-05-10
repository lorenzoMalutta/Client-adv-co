import {
    RouterProvider,
} from "react-router-dom";
import { router } from "./Router";
import { NavBar } from "./components/navBar";
import { Header } from "./components/header";

function App() {
    return (
        <>
            <Header />
            <NavBar />
            <RouterProvider router={router} />
        </>
    )
}

export default App
