import WorkCard from './WorkCard'

export default function Resume(props) {
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
    const works = [
        {
            company: "UFCU",
            dates: "04/2019 to present",
            title: "IT Service Desk Analyst",
            desc: "Troubleshooting several enterprise applications, offering valuable solutions on the spot, or escalating the issue to the correct team.",
        },
        {
            company: "UFCU",
            dates: "09/2015 to 04/2019",
            title: "Cross-trained Teller, to Member Service Representative",
            desc: "Used critical thinking to understand member needs and deliver valuable solutions, enriching the member experience.",
        },
        {
            company: "Wells Fargo",
            dates: "02/2014 to 09/2015",
            title: "Bank Teller",
            desc: "Used various financial applications to build sales and complete transactions.",
        },
        {
            company: "Texas Dept. of Criminal Justice",
            dates: "09/2012 to 02/2014",
            title: "Corrections Officer",
            desc: "Used situational awareness, critical thinking, to ensure safety for myself, my fellow officers, and inmates in my charge.",
        },
    ]
    return (
        <div className="mx-auto my-2 container">
            <h1>Resume</h1>
            <div>
                <h3>Summary</h3>
                <p>
                    Full-Stack Web Developer, with a background in IT Support and Video Game Design. I graduated from Full Sail University with a Bachelor of Science in Video Game Design, and a certificate for full stack web development from the University of Texas, Austin. Creative and dedicated problem solver with a love of developing and improving useful apps with clean and extendible code. 
                </p>
            </div>
            <div>
                <h3>Technical Skills</h3>
                <ul>
                    {skills.map((skill) => (
                        <li className="d-inline p-1 m-1" key={skill}>🔹{skill}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Projects</h3>
                <ul>
                    <li><a href="https://github.com/Lixiviate/P2-Book-Nest" className="link-underline link-underline-opacity-0">BookNest</a></li>
                    <li><a href="https://github.com/jknowles10/Marvel-Weather-App" className="link-underline link-underline-opacity-0">Marvel Meteorology</a></li>
                    <li><a href="https://github.com/nearias3/Wizard-s-Apprentice" className="link-underline link-underline-opacity-0">Wizard's Apprentice: Pieces of the Master</a></li>
                </ul>
            </div>
            <div>
                <h3>Work Experience</h3>
                <WorkCard works={works} />
            </div>
            <div>
                <h3>Education</h3>
                <ul>
                    <li>Full Sail University - Bachelor of Science in Game Design - Class 2016</li>
                    <li>Unversity of Texas at Austin - Coding Boot Camp Certificate - 2024</li>
                </ul>
            </div>
        </div>
    )
}