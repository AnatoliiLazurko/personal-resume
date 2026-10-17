import './App.css'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Languages from './components/Languages/Languages'
import PersonalProfile from './components/PersonalProfile/PersonalProfile'
import References from './components/References/References'

function App() {

  return (
    <>
      <Header />
      <PersonalProfile />
      <Experience />
      <Languages />
      <Education />
      <References />
      <Footer />
    </>
  )
}

export default App
