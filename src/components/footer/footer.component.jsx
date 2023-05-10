
import SosmedMe from "../social-media/social-media.component"

const Footer = () => {
    return (
        <footer className="bg-dark pt-24 pb-12">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                    <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
                        <h2 className="font-bold text-2xl md:text-4xl mb-5 text-primary">Fajar Abdurrohman</h2>
                        <h3 className="font-bold text-2xl mb-2">Hubungi saya</h3>
                        <p><a href="https://mailto:abdurohmanfajar10@gmail.com"
                            target="_blank" className="hover:underline">abdurrohmanfajar10@gmail.com</a> </p>
                        <p>+6281329493505</p>
                        <p>Ngawi</p>

                    </div>

                    <div className="w-full px-4 mb-12 md:w-1/3">
                        <h3 className="font-semibold text-xl mb-5 text-primary">Navigasi menu</h3>
                        <ul className="text-slate-300">
                            <li>
                                <a href="#home" className="inline-block text-base hover:text-primary mb-2">Beranda</a>
                            </li>
                            <li>
                                <a href="#portofolio" className="inline-block text-base hover:text-primary mb-2">Portfolio</a>
                            </li>
                            <li>
                                <a href="#about" className="inline-block text-base hover:text-primary mb-2">Kontak</a>
                            </li>


                        </ul>
                    </div>
                </div>

                <div className="w-full ptborder-t border-slate-700 ">
                    <div className="flex item-center justify-center mb-5">
                        <SosmedMe />
                    </div>

                </div>
                <p className="flex flex-wrap item-center justify-center font-medium text-xs text-slate-500">Dibuat dengan <span className="text-pink-500">💗</span>  oleh &nbsp; <a href="#" target="_blank" className="font-bold text-primary"> Fajar Abdurrohman</a>,  menggunakan &nbsp;<a href="https://tailwindcss.com" className="font-bold text-sky-500"> Tailwind CSS</a> </p>
            </div>

        </footer >
    )
}

export default Footer
