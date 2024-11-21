export default function Resume(props) {
    console.log(props);
    const skills = [
        "C#",
        "HTML5",
        "CSS",
        "JavaScript",
        "git",
        "OOP",
        "ORM",
        "React.js",
        "MERN",
        "State Management",
        "MVC architecture",
        "RESTful APIs",
        "Node.js",
        "Express.js",
        "SQL",
        "NoSQL",
        "MongoDB",
        "Apollo graphQL",
        "Python",
        "Django",
        ".NET",
        "Postgres",

    ]
    return (
        <div className="border  mx-auto my-2 container">
            <h1>Resume</h1>
            <div>
                <p>Technical Skills</p>
                <ul>
                    {skills.map((skill) => (
                        <li className="d-inline p-1 m-1">▫️{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}