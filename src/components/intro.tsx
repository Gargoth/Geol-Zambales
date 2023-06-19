import { motion } from "framer-motion"

export default function Intro() {
    return (
        <motion.div className="container my-3" initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 100 }} viewport={{ once: true }} transition={{ type: "spring" }}>
            <div className="card text-bg-success">
                <div className="row g-0">
                    <div className="col-md-4 overflow-hidden">
                        <motion.img
                            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Zambales_Mountains_topographic_map_en.svg"
                            viewport={{ once: true }}
                            initial={{ scale: 50, rotate: 100 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            whileHover={{ scale: 1.5 }}
                            transition={{ type: "linear", duration: 1 }}
                            className="img-fluid rounded-start c-map"
                            alt="Topographical Map of Zambales" />
                    </div>
                    <div className="col-md-8">
                        <div className="container-fluid p-4 d-flex flex-column justify-content-evenly c-intro-card" style={{height:"100%"}}>
                            <h1 className="card-title fs-1">ZAMBALES</h1>
                            <ul className="fs-4">
                                <li className="my-3 "><u>2nd largest province</u> among the 7 provinces of Central Luzon</li>
                                <li className="my-3 ">Bordered by <u>Pangasinan</u> to the north and northeast, <u>Tarlac</u> to the east, <u>Pampanga</u> to the southeast, <u>Bataan</u> to the south and the <u>South China Sea</u> to the west.</li>
                                <li className="my-3 ">Total Land Area of <u>3830.83 km<sup>2</sup></u></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
