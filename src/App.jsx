import './App.css'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Interests from './components/Interests/Interests'
import Languages from './components/Languages/Languages'
import PersonalProfile from './components/PersonalProfile/PersonalProfile'
import References from './components/References/References'
import Skills from './components/Skills/Skills'

function App() {

  return (
    <>
      <Header />
      <PersonalProfile />
      <Experience />
      <Skills />
      <Education />
      <Languages />
      <Interests />
      <References />
      <Footer />
    </>
  )
}

export default App
