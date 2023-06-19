import { motion } from "framer-motion";
import RockCard, { rock } from "./rockcard"

const rocks: rock[] = [
    {
        name: "Harzburgite",
        classification: "ultramafic, phaneritic, igneous",
        imageurl: "https://www.alexstrekeisen.it/immagini/diagrammi/peridotite2019(6).jpg",
        description: "A variety of peridotite consisting mostly of the two minerals olivine and low-calcium (Ca) pyroxene (enstatite)."
    },
    {
        name: "Lherzolite",
        classification: "ultramafic, phaneritic, igneous",
        imageurl: "https://upload.wikimedia.org/wikipedia/commons/9/98/Estonian_Museum_of_Natural_History_Specimen_No_177565_photo_%28g220_g220-15_1_jpg%29.jpg",
        description: "Consists of 40 to 90% olivine along with significant orthopyroxene and lesser amounts of calcic chromium-rich clinopyroxene."
    },
    {
        name: "Dunite",
        classification: "ultramafic, phaneritic, igneous",
        imageurl: "https://cdn.britannica.com/57/8257-004-0262A9F7/Dunite-Jackson-County-North-Carolina.jpg",
        description: "The mineral assemblage of dunite is greater than 90% olivine, with minor amounts of other minerals such as pyroxene, chromite, magnetite, and pyrope.",
    },
    {
        name: "Werhlite",
        classification: "ultramafic, ultrabasic, igneous",
        imageurl: "https://plug.plugon.us/img/b/b64/b649f1ee2f7b4d84bbc24243e964126c/img1.jpg",
        description: "A mixture of olivine and clinopyroxene.",
    },
    {
        name: "Gabbro",
        classification: "mafic, phaneritic, igneous",
        imageurl: "https://www.sandatlas.org/wp-content/uploads/1353-09.06.15_1-gabbro-augite-phenocrysts-11-cm1.jpg",
        description: "Relatively low in silica and rich in iron, magnesium, and calcium.",
    },
    {
        name: "Diabase",
        classification: "mafic, aphanitic, igneous",
        imageurl: "https://lh3.googleusercontent.com/-YBT977uUdyo/UFA-fktktqI/AAAAAAAAIa4/xZ-x6HuarGY/s512/00108%252520IMG_5396%252520diabase.jpg",
        description: "A holocrystalline, subvolcanic rock equivalent to volcanic basalt or plutonic gabbro.",
    },
    {
        name: "Troctolite",
        classification: "mafic, phaneritic, igneous",
        imageurl: "https://www.alexstrekeisen.it/immagini/diagrammi/troctolite2017(1).jpg",
        description: "Consists of major but variable amounts of olivine and calcic plagioclase along with minor pyroxene.",
    },
    {
        name: "Anorthosite",
        classification: "mafic, phaneritic, igneous",
        imageurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Anorthosit_of_Salem_Tamil_Nadu.jpg/300px-Anorthosit_of_Salem_Tamil_Nadu.jpg",
        description: "Characterized by its composition which is mostly plagioclase feldspar (90–100%) with a minimal mafic component (0–10%).",
    },
]

export default function Rocks() {
    const rockCards: JSX.Element[] = rocks.map((rock) => <RockCard name={rock.name} imageurl={rock.imageurl} description={rock.description} />)
    return (
        <motion.div className="container my-3" initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 100 }} viewport={{ once: true }} transition={{ type: "spring" }}>
            <h1 className="display-1">Notable Rocks in Zambales</h1>
            {rockCards}
        </motion.div>
    )
}
