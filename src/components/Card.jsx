export default function Card({ projects }) {

    return (
        <div className="row justify-content-center">

            {projects.map((project) => (
                <div className="card text-center p-2 m-2 col" key={project.title}>

                    <img src={project.picLink} className="card-img-top" alt={project.title} />

                    <div className="card-body">

                        <h5 className="card-title">{project.title}</h5>

                        <p className="card-text">{project.desc}</p>

                        <ul className="list-group list-group-horizontal">

                            <li className="list-group-item">
                                <a className="btn btn-primary" href={project.ghLink}>{project.title} Github</a>
                            </li>

                            <li className="list-group-item">
                                <a className="btn btn-primary" href={project.appLink}>{project.title} Site</a>
                            </li>

                        </ul>

                    </div>

                </div>
            ))}

        </div>

    )
}