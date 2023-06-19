import { motion } from 'framer-motion'
import MountainChart from './mountainchart'

export default function Mountains() {
    return (
        <>
            <motion.div className="container my-3" initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 100 }} viewport={{ once: true }} transition={{ type: "spring" }}>
                <div className="card text-bg-light">
                    <h1 className="card-title p-3">Mountains of Zambales</h1>
                    <h1 className="card-subtitle p-3 fs-4 c-subtitle">Height comparison of mountains in meters</h1>
                    <div className="row">
                        <div className="container-fluid d-flex">
                            <MountainChart />
                        </div>
                    </div>
                    <hr />
                    <h1 className="card-subtitle p-3 fs-4 c-subtitle">Interesting facts</h1>
                    <div className="row g-0 p-3">
                        <div className="row p-3">
                            <div className="col-md-4">
                                <b className="fs-3">Mt. Tapulao</b>
                            </div>
                            <div className="col-md-8 fs-5">
                                <li>Highest Elevation Point in Zambales</li>
                                <li>Named from the high abundance of Sumatran Pine Trees locally known as <i>"tapolaw"</i></li>
                                <li>Popular hiking trail in Zambales</li>
                            </div>
                        </div>
                        <div className="row p-3">
                            <div className="col-md-4">
                                <b className="fs-3">Mt. Pinatubo</b>
                            </div>
                            <div className="col-md-8 fs-5">
                                <li>2nd Largest Terrestrial Eruption of the 20th Century</li>
                                <li>The eruption was classified as VEI-6 (Volcanic Explosivity Index)</li>
                                <li>Mt. Pinatubo's highest point was 1,745m before the 1991 eruption</li>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
