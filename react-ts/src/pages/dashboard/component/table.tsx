import { TDataTableItem } from "../../../types"
import { Dropdown } from "./dropdown";
import { useState } from "react";

type Props = {
    data: TDataTableItem[];
}

export function Table({ data }: Props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

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
            <table className="table-fixed border-[1px] border-[#F4F4F5] h-[594px]">
                <thead className="border-b-[1px] border-[#F4F4F5]">
                    <tr>
                        <th className="p-5">NOME</th>
                        <th></th>
                        <th></th>
                        <th className="text-left">CARGO</th>
                        <th className="text-left">E-MAIL</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item, index) => (
                        <tr className="h-16" key={index}>
                            <td className="w-7 pl-5"><img className="rounded-full" src="https://picsum.photos/seed/picsum/40/40" alt="" /></td>
                            <td>{item.name}</td>
                            <td className="text-center"><p className="bg-[#F7F7F8] w-fit rounded-2xl pt-1 pb-1 pl-3 pr-3 font-medium text-[#4A525B]">{item.permission}</p></td>
                            <td>{item.role}</td>
                            <td>{item.email}</td>
                            <td>
                                <Dropdown
                                    id={item.id}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
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
