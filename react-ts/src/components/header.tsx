import { CgSearch } from "react-icons/cg";

export const Header = () => {
    return (
        <header className="flex align-baseline justify-between items-center border-b-[1px] border-gray-100 w-full">
            <div className="flex items-baseline ml-6 mr-6 mb-2">
                <div>
                    <h2 className="m-0">
                        Olá  Giovanna!
                    </h2>
                    <p>Seja bem vindo(a).</p>
                </div>
                <div className="ml-32 mt-5 mb-5 flex items-center relative">
                    <input className="w-96 h-12 pl-5 pr-12 rounded-lg border-[#F4F4F5] border-[1px] focus:border-[#006B9E]" placeholder="Pesquise" type="text" />
                    <div className="absolute right-0 top-0 h-full w-12 flex items-center justify-end mr-4">
                        <CgSearch className="text-gray-400 text-lg" />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center bg-[#F4F4F5] rounded-full w-12 h-12 mr-6">
                <h3>
                    GS
                </h3>
            </div>
        </header>
    )
}