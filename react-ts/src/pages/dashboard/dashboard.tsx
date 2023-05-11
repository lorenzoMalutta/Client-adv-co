import { Header } from "../../components/header";
import { NavBar } from "../../components/navBar";
import { Table } from "./component/table";

export default function Dashboard() {
    return (
        <section className="flex flex-col h-screen">
            <div className="flex flex-1">
                <NavBar />
                <div className="flex-1">
                    <Header />
                    <div className="grid ml-6 mr-6 mt-14 gap-10">
                        <div className="flex justify-between items-center">
                            <div className="grid gap-2">
                                <h1>Colabordadores</h1>
                                <p>Veja abaixo todos os colaboradores da sua empresa cadastrados na plataforma.</p>
                            </div>
                            <button type="button" value="colaborador" className="bg-blue-600 h-14 w-44 rounded text-white font-semibold text-base" >
                                Novo colaborador
                            </button>
                        </div>
                        <Table />
                    </div>
                </div>
            </div>
        </section>
    )
}