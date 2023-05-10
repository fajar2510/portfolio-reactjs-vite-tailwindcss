import { useState } from "react"

const Portfolio = () => {
    const [projects] = useState([
        {
            id: 1,
            title: 'Aplikasi Pemetaan Geografis Tenaga Kerja Jatim',
            imgUrl: './src/img/portofolio/penta-map/Screenshot_11.png',
            description: 'Pada aplikasi ini merupakan antarmuka peta jawa timur yang didalamnya menampilkan titik-titik sebaran tenaga kerja di masing-masing kabupaten/kota dengan klasifikasi warna tertentu'
        },
        {
            id: 2,
            title: "Web Sistem Informasi Eksekutif Bank Darah",
            imgUrl: "./src/img/portofolio/sie_rsibd/Screenshot_6.png",
            description: "Pada aplikasi ini digunakan untuk memanajemen keluar masuk pasokan darah dari Rumah Sakit Islam Surabaya berdasarkan pengelompokan jenis darah dan tipe darah serta menghitung kebutuhan darah per wilayah di Surabaya",
        },
        {
            id: 3,
            title: "Aplikasi Wedding Organizer Maharagung",
            imgUrl: "./src/img/portofolio/wo_maharagung/Screenshot_3.png",
            description: "Web untuk pengelollan pernikahan dari konsultasi, layanan siraman, cathering, sound system, hingga hiburan dalam satu paket pembiayaan",
        },
        {
            id: 4,
            title: "Sistem Informasi Akuntansi",
            imgUrl: "./src/img/portofolio/sia_akuntansi/Screenshot_1.png",
            description: "Mengelola secara akuntansi disetiap penjualan dan pembelian, atau debet/kredit.Membuat Harta aktiva passiva, buku besar, hingga menghitung neraca, laba dan rugi",
        },
        {
            id: 5,
            title: "AIKU Aplikasi Android Konseling Online",
            imgUrl: "./src/img/portofolio/aiku/Screenshot_20230426-092056.jpg",
            description: "Aplikasi untuk bertemu psikolog secara online melalui jasa booking aplikasi secara flexibel, menggunakan framework Fluter.",
        },
    ])

    return (
        <section id="portofolio" className="pt-36 pb-16 bg-slate-100 dark:bg-slate-800">
            <div className="container">
                <div className="w-full px-4">
                    <div className="max-w-xl  mx-auto text-center mb-16">
                        <h4 className="font-semibold text-lg text-primary mb-2">Portofolio</h4>
                        <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">Project terbaru</h2>
                        <p className="font-medium text-md text-secondary md:text-lg">Berikut ini adalah beberapa project terbaru yang telah saya buat sebelumnya</p>
                    </div>
                </div>

                <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
                    {projects.map((project) => (
                        <div key={project.id} className="mb-12 p-4 md:w-1/2 group">
                            <div className="rounded-md shadow-md overflow-hidden group-hover:scale-[96%] group-hover:shadow-primary transition duration-500 ease-in-out">
                                <img src={project.imgUrl} className="group-hover:scale-110  transition duration-500 ease-in-out " alt="portofolio 1" width="w-full" />
                            </div>
                            <h3 className="font-semibold text-xl text-dark dark:text-white mt-5 mb-3">{project.title}</h3>
                            <p className="font-medium text-base text-secondary text-justify">{project.description}</p>
                        </div>
                    ))}


                </div>
            </div>
        </section>
    )
}

export default Portfolio