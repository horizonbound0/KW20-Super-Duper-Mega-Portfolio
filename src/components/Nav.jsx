export default function Nav(props) {
    console.log(props);
    return (
        <nav className="main-header-menu">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">About Me</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact Me</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Resume</a>
                </li>
            </ul>
        </nav>
    );
}