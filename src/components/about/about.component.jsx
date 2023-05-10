import SosmedMe from "../social-media/social-media.component"

const About = () => {

    return (
        <section id="about" className="pt-36 pb-32 dark:bg-dark">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full px-4 mb-10 lg:w-1/2">
                        <h4 className="font-bold uppercase text-primary text-lg mb-3">
                            Kontak
                        </h4>
                        <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl dark:text-white">
                            Lebih tahu tentang saya dan temukan
                        </h2>
                        <p className="font-medium text-base text-secondary max-w-xl lg:text-lg text-justify">
                            Perkenalkan, saya Fajar Abdurrohman asal dari Ngawi Jawa Timur, dari <a href="https://www.unesa.ac.id/" className="hover:underline text-slate-800 dark:text-white hover:text-primary ">Universitas Negeri Surabaya</a>, jurusan Teknik Informatika, sudah menggeluti di bidang IT
                            lebih dari 5 tahun, memiliki pengalaman bekerja tim, penggunaan framework
                            <a href="https://laravel.com/" className="font-bold uppercase text-primary text-base hover:underline hover:opacity-70"> laravel</a>,
                            <a href="https://codeigniter.com/" className="font-bold uppercase text-primary text-base hover:underline hover:opacity-70">codeigniter</a>,
                            <a href="https://nodejs.org/en" className="font-bold uppercase text-primary text-base hover:underline hover:opacity-70">node.js</a>,
                            <a href="https://react.dev/" className="font-bold uppercase text-primary text-base hover:underline hover:opacity-70">react.js</a> dan tools kolaborasi seperti
                            <a href="https://github.com/" className="font-bold uppercase text-primary text-base hover:underline hover:opacity-70"> Github </a>dan sebagainya.
                        </p>
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10 dark:text-white">Mari berteman</h3>
                        <p className="font-medium text-base text-secondary mb-6 lg:text-lg">
                            Hai, mari berteman temukan saya di jejaring sosial media <span className=" text-primary"> <a href="https://instagram.com/fajar.arh25" className="hover:underline hover:opacity-70">Instagram</a> ,<a href="https://twitter.com/laststory43" className="hover:underline hover:opacity-70">Twitter</a>
                                ,<a href="https://linkedin.com/in/fajar-abdurrohman" className="hover:underline hover:opacity-70">Linkedin</a> , dan <a href="https://github.com/fajar2510" className="hover:underline hover:opacity-70">Github</a></span> ini, terimakasih.
                        </p>

                        <SosmedMe />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
