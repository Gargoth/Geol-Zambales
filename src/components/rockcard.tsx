import { motion } from "framer-motion";

export interface rock {
    name: string,
    classification: string,
    imageurl: string,
    description: string,
}

export default function RockCard(props: rock) {
    return (
        <motion.div className="card fs-5" initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 100 }} viewport={{ once: true }} transition={{ duration: 1 }}>
            <div className="row g-0 overflow-hidden">
                <div className="col-md-2 overflow-hidden d-flex justify-content-center">
                    <img className="img-thumbnail rounded-start" src={props.imageurl}  style={{ maxHeight: "30vh" }}/>
                </div>
                <div className="col-md-8 card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <h6 className="card-subtitle">{props.classification}</h6>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </motion.div >
    )
}
