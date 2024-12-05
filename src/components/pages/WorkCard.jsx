export default function Card({ works }) {

    return (
        <div className="row justify-content-center">

            {works.map((work) => (
                <div className="card bg-dark text-center p-2 m-2 col" key={work.title}>

                    <div className="card-body">

                        <h5 className="card-title">{work.title} for {work.company}</h5><br></br>
                        <ul>
                            <li>from {work.dates}</li>
                        </ul>
                        <p className="card-text border">{work.desc}</p>                       

                    </div>

                </div>
            ))}

        </div>

    )
}