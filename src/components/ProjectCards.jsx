import Card from './Card';

export default function ProjectCards() {
    
    const projects = [
        {
            title: "BookNest",
            ghLink: "https://github.com/Lixiviate/P2-Book-Nest",
            appLink: "https://p2-book-nest.onrender.com/",
            picLink: "./assets/BNLogo.png",
        },
        {
            title: "Marvel Weather App",
            ghLink: "https://github.com/jknowles10/Marvel-Weather-App",
            appLink: "https://jknowles10.github.io/Marvel-Weather-App/",
            picLink: "./assets/MMLogo.png",
        },
        {
            title: "Wizard's Apprentice: Pieces of the Master",
            ghLink: "https://github.com/nearias3/Wizard-s-Apprentice",
            appLink: "https://wizard-s-apprentice.onrender.com/",
            picLink: "./assets/WALogo.png"
        },
    ]

    return (
        <div className="border container  mx-auto my-2">
            <h1>Projects</h1>
            <div>
                <Card projects={ projects} />
            </div>
        </div>        
    )
}