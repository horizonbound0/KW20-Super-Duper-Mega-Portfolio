export default function Card({ projects }) {

    return (
        <div className="row justify-content-center">

            {projects.map((project) => (
                <div className="card bg-secondary text-center p-2 m-2 col" key={project.title}>

                    <img src={project.picLink} className="card-img-top" alt={project.title} />

                    <div className="card-body">

                        <h5 className="card-title">{project.title}</h5>

                        <p className="card-text">{project.desc}</p>

                        <div className="row">
                            <a className="btn btn-dark card-link col" href={project.ghLink}>{project.title} Github</a>

                            <a className="btn btn-dark card-link col" href={project.appLink}>{project.title} Site</a>
                        </div>                        

                    </div>

                </div>
            ))}

        </div>

    )
}