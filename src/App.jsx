import { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import ProjectCards from './components/ProjectCards';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <div className='justify-content-end'>
      <Header />
    </div>
      <AboutMe />
      <ProjectCards />
      <Resume />
      <ContactMe />
      <Footer />
    </>
  )
}

export default App
