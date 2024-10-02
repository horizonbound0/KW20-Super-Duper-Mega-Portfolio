import Card from './Card';

export default function ProjectCards() {
    
    const projects = [
        {
            title: "BookNest",
            ghLink: "test",
            appLink: "test",
        },
        {
            title: "Marvel Weather App",
            ghLink: "test",
            appLink: "test",
        },
        {
            title: "Kanban Board",
            ghLink: "test",
            appLink: "test",
        },
        {
            title: "Readme Generator",
            ghLink: "test",
            appLink: "test",
        },
        {
            title: "Technically Speaking",
            ghLink: "test",
            appLink: "test",
        },
        {
            title: "SciFi RPG",
            ghLink: "test",
            appLink: "test",
        },
    ]

    return (
        <div className="border container">
            <h1>Project Cards</h1>
            <div>
                <Card projects={ projects} />
            </div>
        </div>        
    )
}