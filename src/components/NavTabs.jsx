function NavTabs({ currentPage, handlePageChange, handleDarkMode }) {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a href="#aboutMe"
                onClick={() => {handlePageChange('AboutMe')}}
                className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>About Me</a>
            </li>
            <li className="nav-item">
                <a href="#projects"
                onClick={() => {handlePageChange('Projects')}}
                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>Projects</a>
            </li>
            <li className="nav-item">
                <a href="#contactMe"
                onClick={() => {handlePageChange('ContactMe')}}
                className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}>Contact Me</a>
            </li>
            <li className="nav-item">
                <a href="#resume"
                onClick={() => {handlePageChange('Resume')}}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
            </li>
            <li className="border rounded border-dark">
                <a href="#darkMode"
                onClick={() => {handleDarkMode()}}
                className={currentPage === 'Dark' ? 'nav-link active' : 'nav-link'}>Dark Mode</a>
            </li>
        </ul>
    )
}

export default NavTabs;