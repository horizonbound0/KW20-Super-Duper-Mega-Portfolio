export default function Card({ projects }) {

    const cardStyling = {
        width: '18rem',
    };
    
    return (
        <div className="row justify-content-center">
            {projects.map((project) => (
                <div className="card text-center justify-content-center m-2" style={cardStyling} key={project.title}>
                    <img src={project.picLink} className="card-img-top w-50" alt={project.title} />
                    <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item">
                                <a href={project.ghLink}>{project.title} Github</a>
                            </li>
                            <li className="list-group-item">
                                <a href={project.appLink}>{project.title} Site</a>
                            </li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>

    )
}