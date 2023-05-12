import { CgSearch } from "react-icons/cg";

export function Header() {
    return (
        <header className="sm:flex sm:align-baseline sm:justify-between sm:items-center sm:w-full border-b-[1px] border-gray-100 ">
            <div className=" sm:flex sm:items-baseline ml-6 mr-6 mb-2 sm:mt-0 mt-6">
                <div className="flex">
                    <div className="sm:hidden  flex items-center justify-center bg-[#F4F4F5] rounded-full w-12 h-12 mr-6">
                        <h3>
                            GS
                        </h3>
                    </div>
                    <div>
                        <h2 className="m-0">
                            Olá  Giovanna!
                        </h2>
                        <p>Seja bem vindo(a).</p>
                    </div>
                </div>
                <div className="sm:ml-32 mt-5 mb-5 sm:flex sm:items-center relative">
                    <form action="">
                        <input className="sm:w-96 h-12 pl-5 pr-12 focus:border-[#006B9E]" name="search" placeholder="Pesquise" type="text" />
                        <div className="absolute right-0 top-0 h-full w-12 flex items-center justify-end mr-4">
                            <CgSearch className="text-gray-400 text-lg" />
                        </div>
                    </form>
                </div>
            </div>
            <div className=" hidden sm:flex items-center justify-center bg-[#F4F4F5] rounded-full w-12 h-12 mr-6">
                <h3>
                    GS
                </h3>
            </div>
        </header>
    )
}