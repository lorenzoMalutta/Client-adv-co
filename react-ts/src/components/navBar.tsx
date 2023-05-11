export const NavBar = () => {
    return (
        <aside className="w-72 h-auto border-gray-100 border-r-[1px]">
            <div className="mt-12 pl-10 pr-24">
                <h1>adv.CO</h1>
            </div>
            <nav className="grid mt-12 gap-2">
                <div className="flex items-center h-12  hover:bg-blueHover hover:border-[#006B9E] hover:border-r-2">
                    <a className="pt-3 pb-3 ml-10 w-full focus:text-blue-700" href="/">Dashboard</a>
                </div>
                <div className="flex items-center h-12 hover:bg-blueHover hover:border-[#006B9E] hover:border-r-2">
                    <a className="pt-3 pb-3 ml-10 w-full focus:text-blue-700" href="/">Conversas</a>
                </div>
                <div className="flex items-center h-12 hover:bg-blueHover hover:border-[#006B9E] hover:border-r-2">
                    <a className="pt-3 pb-3 ml-10 w-full focus:text-blue-700" href="/">Minhas solicitações</a>
                </div>
                <div className="flex items-center h-12 hover:bg-blueHover hover:border-[#006B9E] hover:border-r-2">
                    <a className="pt-3 pb-3 ml-10 w-full focus:text-blue-700" href="/">Colaboradores</a>
                </div>
                <div className="flex items-center h-12 hover:bg-blueHover hover:border-[#006B9E] hover:border-r-2">
                    <a className="pt-3 pb-3 ml-10 w-full focus:text-blue-700" href="/">Advogado Virtual</a>
                </div>
                <div className="flex items-center h-12 hover:bg-blueHover hover:border-[#006B9E] hover:border-r-2">
                    <a className="pt-3 pb-3 ml-10 w-full focus:text-blue-700" href="/">Contratos</a>
                </div>
            </nav>
            <div className="mt-80 border-gray-100 m-10 border-t-[1px]">
                <div className="mt-8 gap-8 grid">
                    <div>
                        <a href="">Configurações</a>
                    </div>
                    <div>
                        <a href="">Sair</a>
                    </div>
                </div>
                <div className="flex items-center mt-12">
                    <div className="flex items-center justify-center bg-[#F4F4F5] rounded-full w-12 h-12 mr-6">
                        <h3>GS</h3>
                    </div>
                    <div>
                        <h3>Giovanna</h3>
                        <p>hello@gio.com</p>
                    </div>
                </div>
            </div>
        </aside>
    )
}
