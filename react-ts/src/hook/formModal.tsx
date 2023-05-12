import React, { useState } from "react";
import Modal from "./modal";
import api from "../services/api"
import closeIcon from "../assets/x.svg";

type FormModalProps = {
    title?: string;
    subtitle?: string;
    isOpen: boolean;
    onClose: () => void;
    apiUrl: string;
    fields: Array<{ label: string; name: string, icons?: string, placeHolder: string, type: string }>;
    styles?: React.CSSProperties;
};

const FormModal = ({ isOpen, onClose, apiUrl, fields, styles, title, subtitle }: FormModalProps) => {
    const [formState, setFormState] = useState({});

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formState);
        // api.post(apiUrl, formState, {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
    };

    return (
        <Modal onClose={onClose} isOpen={isOpen} styles={styles}>
            <form className="grid h-full" onSubmit={handleSubmit}>
                <div>
                    <div className="flex items-center justify-between mb-8">
                        <div className="grid gap-2">
                            <h1 className="font-semibold text-2xl">
                                {title}
                            </h1>
                            <p>{subtitle}</p>
                        </div>
                        <div>
                            <button onClick={onClose} className="flex items-center justify-center bg-[#F4F4F5] w-9 h-9 rounded">
                                <img src={closeIcon} alt="fechar o cadastro" />
                            </button>
                        </div>
                    </div>
                    {fields.map(({ label, name, icons, placeHolder, type }, index) => (
                        <div key={index} className="mb-4">
                            <label className="block text-[#5E666F] font-medium text-base mb-[10px]">{label}</label>
                            <div className="flex items-center relative">
                                {type === "select" ? (
                                    <>
                                        <img className="absolute left-0 flex items-center justify-end ml-4" src={icons} alt="ícone" />
                                        <select className="border border-[#F4F4F5] rounded w-full h-[46px] py-2 px-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" >
                                            <option value="" disabled selected hidden>Selecione</option>
                                            <option value="visualizador">Visualizador</option>
                                            <option value="administrador">Administrador</option>
                                        </select>
                                    </>
                                ) :
                                    <>
                                        <img className="absolute left-0 flex items-center justify-end ml-4" src={icons} alt="ícone" />
                                        <input
                                            className="border rounded w-full h-[46px] py-2 px-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type={type}
                                            name={name}
                                            onChange={handleInputChange}
                                            placeholder={placeHolder}
                                        />
                                    </>
                                }
                            </div>
                        </div>
                    ))}
                </div>
                <div className="self-end">
                    <button
                        className="bg-[#00A3ED] hover:bg-blue-700 text-base h-14 text-white font-semibold w-full rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Salvar
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default FormModal;
