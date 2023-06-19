import { motion } from "framer-motion";

export default function Ophiolites() {
    return (
        <motion.div className="container my-3" initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 100 }} viewport={{ once: true }} transition={{ type: "spring" }}>
            <div className="card p-3 text-bg-secondary">
                <div className="row">
                    <h1 className="card-title">Zambales Ophiolite Complex</h1>
                </div>
                <div className="row p-5 ">
                    <div className="col-md-6 p-0 overflow-hidden">
                    <motion.img
                        src="https://i.redd.it/r3aw60nceke71.jpg"
                        viewport={{ once: true }}
                        initial={{ scale: 50, rotate: 100 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        whileHover={{ scale: 2, y:150 }}
                        transition={{ type: "linear", duration: 1 }}
                        className="img-fluid rounded c-map"
                        alt="Topographical Map of Zambales" />

                    </div>
                    <div className="col-md-6 ">
                        <div className="container-fluid p-4 d-flex flex-column justify-content-evenly c-intro-card" style={{height:"100%"}}>
                            <h1 className="card-title fs-1">ZAMBALES</h1>
                            <ul className="fs-5">
                                <li className="my-3">Made up of two major blocks with differing geochemical signatures and ages (<b>Acoje Block</b> and <b>Coto Block</b>)</li>
                                <li className="my-3">Exposed to the surface via uplift</li>
                                <li className="my-3">Comprises <u>peridotite</u>, <u>gabbro-norite</u>, <u>diabase dikes and sills</u>, and a range of basaltic rock types including <u>pillows, massive and brecciated rocks</u></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
