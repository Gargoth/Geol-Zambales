export default function Topbar() {
    return (
        <nav className="navbar navbar-expand-lg text-bg-danger">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><h1 className="text-white">Geology of Zambales</h1></a>
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link active text-light" href="#">Introduction</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active text-light" href="#">Mountains</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active text-light" href="#">Ophiolites</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active text-light" href="#">Rocks</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
