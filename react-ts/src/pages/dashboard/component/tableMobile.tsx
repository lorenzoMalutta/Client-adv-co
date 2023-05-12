import { useState } from "react";
import { TDataTableItem } from "../../../types"
import { Dropdown } from "./dropdown";

type Props = {
    data: TDataTableItem[];
}


export function TableMobile({ data }: Props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    return (
        <>
            {currentItems.map((item, index) => (
                <div key={index} className="w-72 border-[1px] border-[#F4F4F5] m-2">
                    <ul>
                        <li className="flex justify-between items-center gap-1 border-[1px] border-[#F4F4F5] p-2">
                            <strong>NOME:</strong>
                            <span>{item.name}</span>
                            <span className=""><Dropdown /></span>
                        </li>
                        <li className="flex gap-1 border-[1px] border-[#F4F4F5] p-2">
                            <strong>PERMISSÃO:</strong>
                            <span>
                                <p className="bg-[#F7F7F8] w-fit rounded-2xl pt-1 pb-1 pl-3 pr-3 font-medium text-[#4A525B]">
                                    {item.permission}
                                </p>
                            </span>
                        </li>
                        <li className="flex gap-1 border-[1px] border-[#F4F4F5] p-2">
                            <strong>CARGO:</strong>
                            <span>{item.role}</span>
                        </li>
                        <li className="flex gap-1 border-[1px] border-[#F4F4F5] p-2">
                            <strong>E-MAIL</strong>
                            <span>{item.email}</span>
                        </li>
                    </ul>
                </div>
            ))}
            <div className="flex justify-center items-center">
                {pageNumbers.map((number) => (
                    <button
                        key={number}
                        className={`w-10 h-9 ${number === currentPage
                            ? "border-[#C6CBD0] border-[1px] text-[#4A525B] bg-[#F8F8F8]"
                            : "border-[#DCDFE3] border-[1px] text-[#727A83]"
                            }`}
                        onClick={() => setCurrentPage(number)}
                    >
                        {number}
                    </button>
                ))}
            </div>
        </>
    )
}