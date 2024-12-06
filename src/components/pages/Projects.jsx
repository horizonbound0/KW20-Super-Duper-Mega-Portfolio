import Card from './Card';

export default function Projects() {
    
    const projects = [
        {
            title: "BookNest",
            ghLink: "https://github.com/Lixiviate/P2-Book-Nest",
            appLink: "https://p2-book-nest.onrender.com/",
            picLink: "./assets/booknest.jpg",
            desc: "If you're looking for your next literary fix, this project might help. It blended a love of books, and a love of staying home to read them. We accomplished a lot in only two weeks time.",
        },
        {
            title: "Marvel Meteorology",
            ghLink: "https://github.com/jknowles10/Marvel-Weather-App",
            appLink: "https://jknowles10.github.io/Marvel-Weather-App/",
            picLink: "./assets/marvelweather.jpg",
            desc: "Ever imagine what Marvel superhero would swoop in to save a rainy day? For this project we put our new skills with using RESTful APIs to the test and combined a weather API, and the MARVEL API for some shameless comic book fun.",
        },
        {
            title: "Wizard's Apprentice: Pieces of the Master",
            ghLink: "https://github.com/nearias3/Wizard-s-Apprentice",
            appLink: "https://wizard-s-apprentice.onrender.com/",
            picLink: "./assets/wizards.jpg",
            desc: "We've all felt the pain of freezing during a zoom call, or waiting on someone else to unfreeze. But what would you do if that presenter never un-froze?? This browser game puts you, the player, on a journey to reassemble your web-master teacher after he's frozen in the middle of class! We put together everything we learned, and added some new functionality with Phaser.io.",
        },
    ]

    return (
        <div className="container  mx-auto my-2">
            <h1>Projects</h1>
            <div>
                <Card projects={ projects} />
            </div>
        </div>        
    )
}