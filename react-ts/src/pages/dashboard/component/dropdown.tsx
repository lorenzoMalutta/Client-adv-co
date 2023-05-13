import { useState, useRef, useEffect } from "react";
import MenuIcon from "../../../assets/more-vertical.svg";
import DeleteIcon from "../../../assets/slash.svg";
import { ToastContainer, toast } from "react-toastify";
import api from "../../../services/api";
import 'react-toastify/dist/ReactToastify.css';

interface DropdownProps {
    id: number;
}

export function Dropdown({ id }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    const ref = useRef<HTMLDivElement>(null);

    const handleDelete = async (id: number) => {
        try {
            await api.delete(`users/${id}`);
        } catch (error) {
            toast.error("Erro ao deletar usuário!")
        }
        toast.success("Usuário deletado com sucesso!")
        setTimeout(() => {
            window.location.reload()
        }, 1000)
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    return (
        <>
            <ToastContainer />
            <div className="relative inline-block" ref={ref}>
                {/* Dropdown toggle button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-center w-8 h-[30px] text-[#373F46] bg-white border-2 border-color-[#DCDFE3] rounded-md focus:bg-[#DCDFE3] "
                >
                    <img src={MenuIcon} alt="" />
                </button>

                {/* Dropdown menu */}
                {isOpen && (
                    <div
                        className="absolute top-0 right-0 z-20 w-40 h-11 border-[#F4F4F5] border-[1px] origin-center bg-white rounded"
                        x-transition-enter="transition ease-out duration-100"
                        x-transition-enter-start="opacity-0 scale-90"
                        x-transition-enter-end="opacity-100 scale-100"
                        x-transition-leave="transition ease-in duration-100"
                        x-transition-leave-start="opacity-100 scale-100"
                        x-transition-leave-end="opacity-0 scale-90"
                    >
                        <button
                            onClick={() => [setIsOpen(!isOpen), handleDelete(id)]}
                            className="flex gap-2 px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 rounded transform dark:text-[#EB4444] hover:bg-red-100 "
                        >
                            <img src={DeleteIcon} alt="" />
                            Excluir
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
