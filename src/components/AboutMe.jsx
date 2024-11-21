export default function AboutMe(props) {
    console.log(props);
    const styles = {
        image: {
            width: "200px"
        }
    }
    return (
        <div className="border media container mx-auto my-2">
            <div className="row p-2">
                <img style={styles.image} src="./assets/profilePic.jpg" alt="Ken Wagner" className="#" />
                <div className="col">
                    <h1 className="#">About Me</h1>
                    <p className="#">
                    Full-Stack Web Developer, with a background in IT Support and Video Game Design. I graduated from Full Sail University with a Bachelor’s Degree in Video Game Design, and a certificate for full stack web development from University of Texas, Austin. Creative and dedicated problem solver with a love of developing and improving useful apps with clean and extendible code.
                    </p>
                </div>
            </div>            
        </div>
    )
}