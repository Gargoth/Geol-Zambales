import { motion } from "framer-motion";

export default function Ophiolites() {
    return (
        <motion.div className="container my-3" initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 100 }} viewport={{ once: true }} transition={{ type: "spring" }}>
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
                            whileHover={{ scale: 2, y: 150 }}
                            transition={{ type: "linear", duration: 1 }}
                            className="img-fluid rounded c-map"
                            alt="Topographical Map of Zambales" />

                    </div>
                    <div className="col-md-6 ">
                        <div className="container-fluid p-4 d-flex flex-column justify-content-evenly c-intro-card" style={{ height: "100%" }}>
                            <h1 className="card-title fs-1">ZAMBALES</h1>
                            <ul className="fs-5">
                                <li className="my-3">Made up of two major blocks with differing geochemical signatures and ages (<b>Acoje Block</b> and <b>Coto Block</b>)</li>
                                <li className="my-3">Exposed to the surface via uplift</li>
                                <li className="my-3">Comprises <u>peridotite</u>, <u>gabbro-norite</u>, <u>diabase dikes and sills</u>, and a range of basaltic rock types including <u>pillows, massive and brecciated rocks</u></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row p-5">
                    <table className="table table-hover">
                        <caption>Comparison between Acoje and Coto blocks</caption>
                        <thead>
                            <tr>
                                <th className="text-center" scope="col"><b>Acoje Block</b></th>
                                <th className="text-center" scope="col"><b>Coto Block</b></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="text-center fw-light" scope="col">Generated in an Island Arc <u>Tholeiite</u> setting</th>
                                <th className="text-center fw-light" scope="col">Generated in a Mid-Oceanic-Ridge-Basalt/Island Arc <u>(MORB-IA)</u> setting</th>
                            </tr>
                            <tr>
                                <th className="text-center fw-light" scope="col"><u>Middle Jurrasic (~174.7mya) to Early Cretaceous (~100.5mya) period</u> based on a study of the radiolarian assemblages of chert olistoliths which are believed to be related to other Mesozoic ophiolites in western Luzon Island.</th>
                                <th className="text-center fw-light" scope="col"><u>Eocene epoch (33.9 to 56 mya)</u> determined by paleontological dating of pelagic limestone of Aksitero Formation and by radiometric and isotopic dating of intermediate to silicic intrusive bodies piercing cumulate rocks of the Coto Block</th>
                            </tr>
                            <tr>
                                <th className="text-center fw-light" scope="col">Composed of <i>harzburgites-lherzolites with dunite pods</i>, <i>layered wehrlites with podiform chromites</i>, <i>transition zone dunites cut by pyroxenite and gabbro dykes</i>, <i>layered pyroxenites and dunites</i>, <i>layered and massive gabbronorites</i>, <i>diabase and diorite dykes</i> and <i>pillow basalts with massive sulfides</i></th>
                                <th className="text-center fw-light" scope="col">Consists of <i>harzburgites with podiform chromites</i>, <i>microgabbro and diabase dykes</i>, <i>dunite pods</i>, <i>transition zone dunites</i>, a <i>layered troctolite-gabbro unit with thin dunite-anorthosite layers grading into isotropic gabbros</i>, and an <i>upper volcanic hypabyssal suite</i></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </motion.div>
    )
}
