import React, { useEffect } from 'react';

const Header = () => {

    useEffect(() => {
        // Add your JavaScript code here
        window.onscroll = function () {
            const header = document.querySelector("header");
            const fixedNav = header.offsetTop;
            const toTop = document.querySelector("#to-top");

            if (window.pageYOffset > fixedNav) {
                header.classList.add("navbar-fixed");
                toTop.classList.remove("hidden");
                toTop.classList.add("flex");
            } else {
                header.classList.remove("navbar-fixed");
                toTop.classList.remove("flex");
                toTop.classList.add("hidden");
            }
        };

        // Hamburger

        const hamburger = document.querySelector("#hamburger");
        const navMenu = document.querySelector("#nav-menu");

        hamburger.addEventListener("click", function () {
            hamburger.classList.toggle("hamburger-active");
            navMenu.classList.toggle("hidden");
        });

        // klik diluar hamburger

        window.addEventListener("click", function (e) {
            if (e.target != hamburger && e.target != navMenu) {
                hamburger.classList.remove("hamburger-active");
                navMenu.classList.add("hidden");
            }
        });

        // darkmode toggle
        const darkToggle = document.querySelector("#dark-toggle");
        const html = document.querySelector("html");

        darkToggle.addEventListener("click", function () {
            if (darkToggle.checked) {
                html.classList.add("dark");
                localStorage.theme = "dark";
            } else {
                html.classList.remove("dark");
                localStorage.theme = "light";
            }
        });

        // pindah toggle sesuai mode

        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            darkToggle.checked = true;
        } else {
            darkToggle.checked = false;
        }
    }, []);



    return (
        <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
            <div className="container">
                <div className="flex items-center justify-between relative">
                    <div className="px-4">
                        <a href="#home" className="font-bold text-lg text-primary uppercase  block py-6">Fajar  Abdurrohman</a>

                    </div>
                    <div className="flex items-center px-4">
                        <button id="hamburger" name="hamburger" type="button" className="block absolute right-4 lg:hidden">
                            <span className="origin-top-left hamburger-line transition duration-300 ease-in-out"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out"></span>
                            <span className="origin-bottom-left hamburger-line transition duration-300 ease-in-out"></span>
                        </button>
                        <nav id="nav-menu" className="hidden absolute py-5 bg-slate-200 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-dark dark:shadow-slate-500 lg:dark:bg-transparent">
                            <ul className="block lg:flex">
                                <li className="group">
                                    <a href="#home" className="text-base font-bold  text-slate-500  py-2 mx-8 flex group-hover:text-primary dark:text-white group-hover:font-bold group-hover:text-lg duration-300 ease-in-out">Beranda</a>
                                </li>
                                <li className="group">
                                    <a href="#portofolio" className="text-base font-bold  text-slate-500 py-2 mx-8 flex group-hover:text-primary dark:text-white group-hover:font-bold group-hover:text-lg duration-300 ease-in-out">Portofolio</a>
                                </li>
                                <li className="group">
                                    <a href="#about" className="text-base font-bold  text-slate-500 py-2 mx-8 flex group-hover:text-primary dark:text-white group-hover:font-bold group-hover:text-lg duration-300 ease-in-out">Kontak</a>
                                </li>

                                <li className="flex items-center border-t border-slate-400 pt-3 pl-8 mt-3 md:border-none md:pt-0 md:mt-0 lg:mt-0">
                                    <div className="flex">
                                        <span className="mr-2 text-sm text-slate-500 font-semibold dark:font-normal dark:text-slate-300">Mode Terang</span>
                                        <input type="checkbox" className="hidden" id="dark-toggle" />
                                        <label htmlFor="dark-toggle">
                                            <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-white  dark:bg-slate-500 border border-slate-300 dark:border-none p-1">
                                                <div className="toggle-circle h-4 w-4 rounded-full bg-slate-500 dark:bg-white transition duration-300 ease-in-outfhero">

                                                </div>
                                            </div>
                                        </label>
                                        <span className="ml-2 text-sm text-slate-500 font-normal dark:font-semibold dark:text-slate-300">Mode Gelap</span>
                                    </div>

                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>

    )

}

export default Header;
