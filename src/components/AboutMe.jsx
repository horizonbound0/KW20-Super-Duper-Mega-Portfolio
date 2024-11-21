export default function AboutMe(props) {
    console.log(props);
    const styles = {
        image: {
            width: "200px"
        }
    }
    return (
        <div className="border media container mx-auto my-2">
            <div className="row"></div>
            <img style={styles.image} src="./assets/profilePic.jpg" alt="Ken Wagner" className="col-sm col-4" />
            <div className="media-body col-sm col-8">
                <h1>About Me</h1>
                <p>
                Full-Stack Web Developer, with a background in IT Support and Video Game Design. I graduated from Full Sail University with a Bachelor’s Degree in Video Game Design, and a certificate for full stack web development from University of Texas, Austin. Creative and dedicated problem solver with a love of developing and improving useful apps with clean and extendible code.
                </p>
            </div>
            
        </div>
    )
}