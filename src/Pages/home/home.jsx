import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

const Home = () => {
    return (
        <>
            <Header />

            <section id="home" className="pt-36 pb-24 dark:bg-dark">
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="w-full self-center px-4 lg:w-1/2">
                            <h1 className="text-base font-semibold text-primary md:text-xl lg:mb-3">
                                Halo semua, saya 🖐
                                <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl dark:text-white">Fajar
                                    <span className="bg-gradient"> Abdurrohman</span> </span
                                >
                            </h1>
                            <h2 className=" font-medium text-secondary text-lg mb-5 lg:text-2xl">
                                Student & <span className="text-dark dark:text-white" > Software Engineer</span>
                            </h2>
                            <p className="font-medium text-secondary mb-10 leading-relaxed">
                                Seorang mahasiswa tingkat akhir yang sedang menunggu kelulusan/wisuda, dengan jurusan <span className="text-slate-400  font-bold">Teknik Informatika</span>  dengan prodi S1 Sistem Informasi, saat ini sedang mengikuti bootcamp di <a href="https://harisenin.com" className="text-dark font-bold dark:text-white hover:underline  dark:underline-white">hariSenin.com</a>  sebagai <span className="text-primary font-bold  ">Fullstack Web Developer</span>
                                <span className="text-dark font-bold dark:text-white "> seru loh!</span>
                            </p>

                            <a
                                href="whatsapp://send?text=Hello&phone=+6281329493505"
                                target="_blank"
                                className="text-base font-semibold text-white bg-gradient-button py-3 px-8 rounded-full hover:scale-125 hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                            >

                                Hubungi saya Whatsapp!</a
                            >
                        </div>
                        <div className="w-full self-end px-4 lg:w-1/2">
                            <div className="relative mt-10 lg:mt-9 group lg:right-0">
                                <img
                                    src="src/img/myfoto2.png"
                                    className="relative z-10 max-w-full mx-auto  group-hover:scale-[96%]  transition duration-500 ease-in-out"
                                    alt=""
                                />
                                <span
                                    className="absolute -bottom-20  left-1/2 -translate-x-1/2 -translate-y-8 
                sm:scale-75 md:scale-125 md:-translate-y-24 "
                                >
                                    <svg
                                        width="400"
                                        height="400"
                                        viewBox="0 0 200 200"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="group-hover:scale-[105%]  transition duration-500 ease-in-out"

                                    >
                                        <defs>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#3B82F6" />
                                                <stop offset="100%" stopColor="#34D399" />
                                            </linearGradient>
                                        </defs>
                                        <path
                                            fill="url(#gradient)"
                                            d="M49.1,-18C54.7,1.4,44.2,23.9,24,40.3C3.7,56.8,-26.3,67.1,-43.8,55.5C-61.3,43.9,-66.4,10.4,-57,-14.1C-47.6,-38.6,-23.8,-54.1,-1,-53.7C21.7,-53.4,43.4,-37.3,49.1,-18Z"
                                            transform="translate(100 100) scale(1.1)"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>

    )
}

export default Home;