export default function Card({ projects }) {

    const cardStyling = {
        width: '18rem',
    };
    
    return (
        <div className="row">
            {projects.map((project) => (
                <div className="card text-center justify-content-center m-2" style={cardStyling} key={project.title}>
                    <img src="#" className="card-img-top" alt={project.title} />
                    <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item">
                                <a href="#">{project.ghLink}</a>
                            </li>
                            <li className="list-group-item">
                                <a href="#">{project.appLink}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>

    )
}