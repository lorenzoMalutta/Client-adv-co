import { useState } from "react";
import { Header } from "../../components/header";
import { NavBar } from "../../components/navBar";
import { Table } from "./component/table";
import FormModal from "../../hook/formModal";
import { TField } from "../../types/TField";
import userIcon from "../../assets/user.svg";
import mailIcon from "../../assets/mail.svg";
import briefCaseIcon from "../../assets/briefcase.svg";
import lockIcon from "../../assets/lock.svg";
import { data } from "../../data/fakeData"

export default function Dashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const fields: TField[] = [
        { label: "Nome", name: "name", icons: userIcon, placeHolder: "Digite seu nome", type: "text" },
        { label: "E-mail", name: "email", icons: mailIcon, placeHolder: "Digite seu e-mail", type: "email" },
        { label: "Cargo", name: "cargo", icons: briefCaseIcon, placeHolder: "Digite seu cargo", type: "text" },
        { label: "Permissão", name: "permissao", icons: lockIcon, placeHolder: "Selecione sua permissão", type: "select" },
    ];


    return (
        <section className="flex flex-col">
            <div className="flex flex-1 ">
                <NavBar />
                <div className="flex-1 mb-32">
                    <Header />
                    <div className="grid ml-6 mr-6 mt-14 gap-10">
                        <div className="flex justify-between items-center">
                            <div className="grid gap-2">
                                <h1>Colabordadores</h1>
                                <p>Veja abaixo todos os colaboradores da sua empresa cadastrados na plataforma.</p>
                            </div>
                            <button onClick={() => openModal()} type="button" value="colaborador" className="bg-blue-600 h-14 w-44 rounded text-white font-semibold text-base" >
                                Novo colaborador
                            </button>
                        </div>

                        <FormModal
                            title="Cadastrar novo colaborador"
                            subtitle="Preencha os dados do novo colaborador abaixo"
                            isOpen={isModalOpen}
                            onClose={closeModal}
                            apiUrl="/dashboard"
                            fields={fields}
                            styles={{ width: "568px", height: "100%" }}
                        />

                        <Table
                            data={data}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}