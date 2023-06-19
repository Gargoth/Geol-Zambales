import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts"
import useWindowDimensions from "../utils/useWindowDimensions"

const getPath = (x, y, width, height) => (
    `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
   Z`
);

const TriangleBar = (props) => {
    const {
        fill, x, y, width, height,
    } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const data = [
    {
        name: "Mt. Tapulao",
        height: 2037,
    },
    {
        name: "Mt. Iba",
        height: 1655,
    },
    {
        name: "Mt. Negron",
        height: 1583,
    },
    {
        name: "Mt. Pinatubo",
        height: 1486,
    },
    {
        name: "Mt. Mariveles",
        height: 1388,
    },
    {
        name: "Mt. Cuadrado",
        height: 1324,
    },
    {
        name: "Mt. McDonald",
        height: 1321,
    },
    {
        name: "Mt. Natib",
        height: 1253,
    },
    {
        name: "Mt. Limay",
        height: 910,
    },
    {
        name: "Mt. Dorst",
        height: 849,
    },
    {
        name: "Mt. Samat",
        height: 545,
    },
    {
        name: "Mt. Gates",
        height: 507,
    },
]

export default function MountainChart() {
    const { height, width } = useWindowDimensions();

    return (
        <BarChart width={width/1.5} height={height/2} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="height" barSize={50} fill="#feb272" shape={<TriangleBar />} />
        </BarChart>
    )
}
