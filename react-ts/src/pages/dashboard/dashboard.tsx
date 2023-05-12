import { useState, useEffect } from "react";
import { Table } from "./component/table";
import FormModal from "../../hook/formModal";
import { TField } from "../../types/TField";
import userIcon from "../../assets/user.svg";
import mailIcon from "../../assets/mail.svg";
import briefCaseIcon from "../../assets/briefcase.svg";
import lockIcon from "../../assets/lock.svg";
import { data } from "../../data/fakeData"
import { TableMobile } from "./component/tableMobile";

export default function Dashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="grid gap-10 sm:ml-6 sm:mr-6 sm:mt-14 sm:w-auto w-fit ">
            <div className="sm:flex sm:justify-between sm:items-center sm:w-auto sm:p-0 grid gap-2 w-80 p-1">
                <div className="grid gap-2 ">
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
                styles={{ height: "100%" }}
            />

            {windowWidth > 320 ? (
                <Table data={data} />
            ) : (
                <TableMobile data={data} />
            )}
        </div>
    )
}
