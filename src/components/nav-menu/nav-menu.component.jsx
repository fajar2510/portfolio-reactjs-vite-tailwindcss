import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navmenu = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleDarkModeToggle = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <nav
            id="nav-menu"
            className={`hidden absolute py-5 bg-slate-200 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-dark dark:shadow-slate-500 lg:dark:bg-transparent ${isDarkMode ? 'dark-mode' : ''
                }`}
        >
            <ul className="block lg:flex">
                <li className="group">
                    <Link to="/" className="text-base font-bold  text-slate-500  py-2 mx-8 flex group-hover:text-primary dark:text-white group-hover:font-bold group-hover:text-lg duration-300 ease-in-out">
                        Beranda
                    </Link>
                </li>
                <li className="group">
                    <Link to="/portfolio" className="text-base font-bold  text-slate-500 py-2 mx-8 flex group-hover:text-primary dark:text-white group-hover:font-bold group-hover:text-lg duration-300 ease-in-out">
                        Portofolio
                    </Link>
                </li>
                <li className="group">
                    <Link to="/about" className="text-base font-bold  text-slate-500 py-2 mx-8 flex group-hover:text-primary dark:text-white group-hover:font-bold group-hover:text-lg duration-300 ease-in-out">
                        Kontak
                    </Link>
                </li>

                <li className="flex items-center border-t border-slate-400 pt-3 pl-8 mt-3 md:border-none md:pt-0 md:mt-0 lg:mt-0">
                    <div className="flex">
                        <span className="mr-2 text-sm text-slate-500 font-semibold dark:font-normal dark:text-slate-300">Mode Terang</span>
                        <input type="checkbox" className="hidden" id="dark-toggle" checked={isDarkMode} onChange={handleDarkModeToggle} />
                        <label htmlFor="dark-toggle">
                            <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-white  dark:bg-slate-500 border border-slate-300 dark:border-none p-1">
                                <div className="toggle-circle h-4 w-4 rounded-full bg-slate-500 dark:bg-white transition duration-300 ease-in-outfhero"></div>
                            </div>
                        </label>
                        <span className="ml-2 text-sm text-slate-500 font-normal dark:font-semibold dark:text-slate-300">Mode Gelap</span>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navmenu;
