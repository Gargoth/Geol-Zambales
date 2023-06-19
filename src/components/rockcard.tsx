
export interface rock {
    name: string,
    classification: string,
    imageurl: string,
    description: string,
}

export default function RockCard(props: rock) {
    return (
        <div className="card">
            <div className="row g-0">
                <div className="col-md-4">
                    <img className="img-fluid rounded-start" src={props.imageurl} />
                </div>
                <div className="col-md-8 card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <h6 className="card-subtitle">{props.classification}</h6>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </div>
    )
}
