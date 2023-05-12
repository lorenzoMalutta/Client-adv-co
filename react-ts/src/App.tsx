import {
    RouterProvider,
} from "react-router-dom";
import { router } from "./Router";
import { NavBar } from "./components/navBar";
import { Header } from "./components/header";

function App() {
    return (
        <section className="sm:flex sm:flex-col">
            <div className="sm:flex sm:flex-1 ">
                <NavBar />
                <div className="flex-1 mb-32">
                    <Header />
                    <RouterProvider router={router} />
                </div>
            </div>
        </section>
    )
}

export default App
