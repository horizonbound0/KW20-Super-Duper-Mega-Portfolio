import { useState } from 'react';
import NavTabs from './NavTabs';
import Header from './Header';
import Footer from './Footer';
import Resume from './pages/Resume';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');
  const [darkMode, setDarkMode] = useState(false);

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'ContactMe') {
      return <ContactMe />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  const handleDarkMode = (mode) => setDarkMode(mode);

  const darkOrLight = () => {
    console.log('this is a test');
    if (darkMode) {
      handleDarkMode(false);
    } 
    if (!darkMode) {
      handleDarkMode(true);
    }
    console.log(`dark mode is ${darkMode}`);
  }

  return (
    <div className={darkMode === true ? 'dark' : 'light'}>
      <Header />
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} darkMode={darkMode} handleDarkMode={darkOrLight} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <main className="mx-3">{renderPage()}</main>
      <Footer />
    </div>
  );
}
