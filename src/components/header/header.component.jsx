import React, { useEffect } from 'react';
import Navmenu from '../nav-menu/nav-menu.component';
import { Link } from 'react-router-dom';

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
                        <Link to="/" className="font-bold text-lg text-primary uppercase  block py-6">Fajar  Abdurrohman</Link>

                    </div>
                    <div className="flex items-center px-4">
                        <button id="hamburger" name="hamburger" type="button" className="block absolute right-4 lg:hidden">
                            <span className="origin-top-left hamburger-line transition duration-300 ease-in-out"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out"></span>
                            <span className="origin-bottom-left hamburger-line transition duration-300 ease-in-out"></span>
                        </button>
                        <Navmenu />
                    </div>
                </div>
            </div>
        </header>

    )

}

export default Header;
