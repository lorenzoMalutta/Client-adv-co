import Logo from "../assets/Logo.svg"
import { useState, useEffect } from 'react';

interface NavItem {
    label: string;
    isFocus: boolean;
}

export function NavBar() {
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null); // armazena o índice do item em foco

    const handleFocus = (index: number) => {
        setFocusedIndex(index);
        localStorage.setItem('focusedIndex', index.toString()); // armazena o índice do item em foco no localStorage
    }

    useEffect(() => {
        const storedIndex = localStorage.getItem('focusedIndex'); // recupera o índice do item em foco do localStorage
        if (storedIndex) {
            setFocusedIndex(parseInt(storedIndex));
        }
    }, []);

    const navItems: NavItem[] = [
        { label: "Dashboard", isFocus: false },
        { label: "Conversas", isFocus: false },
        { label: "Minhas solicitações", isFocus: false },
        { label: "Colaboradores", isFocus: false },
        { label: "Advogado Virtual", isFocus: false },
        { label: "Contratos", isFocus: false },
    ];

    if (focusedIndex !== null) {
        navItems[focusedIndex].isFocus = true;
    }

    return (
        <aside className="grid w-72 h-auto border-gray-100 border-r-[1px]">
            <div className="mt-12 pl-10 pr-24">
                <img className="w-40" src={Logo} alt="Logo Legal Cloud" />
            </div>
            <nav className="grid mt-12 gap-2">
                {navItems.map((item, index) => (
                    <div key={index} className={`flex items-center h-12 hover:bg-blueHover hover:border-[#006B9E] hover:border-r-2 ${item.isFocus ? 'bg-blueHover border-r-2 border-[#006B9E]' : ''} `} onFocus={() => handleFocus(index)} >
                        <a className={`pt-3 pb-3 ml-10 w-full focus:text-blue-700 focus:font-semibold ${item.isFocus ? 'text-blue-700 font-semibold' : ''} `} href="/">{item.label}</a>
                    </div>
                ))}
            </nav>
            <div className="self-end border-gray-100 m-10 border-t-[1px]">
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
