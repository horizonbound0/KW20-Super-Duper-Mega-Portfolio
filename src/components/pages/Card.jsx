export default function Card({ projects }) {

    return (
        <div className="row justify-content-center">

            {projects.map((project) => (
                <div className="card text-center p-2 m-2 col border-custom" key={project.title}>

                    <img className="card-img-top" src={project.picLink} alt={project.title} />

                    <div className="card-body">

                        <h5 className="card-title">{project.title}</h5>

                        <p className="card-text">{project.desc}</p>

                        <div className="row">
                            <a className="btn col border-custom" href={project.ghLink}>{project.title} Github</a>

                            <a className="btn col border-custom" href={project.appLink}>{project.title} Site</a>
                        </div>                        

                    </div>

                </div>
            ))}

        </div>

    )
}