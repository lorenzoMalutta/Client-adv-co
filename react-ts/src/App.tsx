import {
    RouterProvider,
} from "react-router-dom";
import { router } from "./Router";
import { NavBar } from "./components/navBar";
import { Header } from "./components/header";

function App() {
    return (
        <div className="sm:flex sm:flex-col">
            <div className="sm:flex sm:flex-1 ">
                <NavBar />
                <div className="flex-1 sm:mb-32 mb-3">
                    <Header />
                    <RouterProvider router={router} />
                </div>
            </div>
        </div>
    )
}

export default App
