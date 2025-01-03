import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Landing from './Components/Landing/Landing';
import AboutGermans from "./Components/AboutGermans/AboutGermans"
import GermanFood from './Components/AboutGermans/GermanFood';
import BeerTypes from './Components/AboutGermans/BeerTypes';
import GermanLanguage from './Components/AboutGermanLanguage/GermanLanguage';
import GermanTest from './Components/AboutGermanLanguage/GermanTest';
import Intro from './Components/Products/Intro';
import Vehicles from './Components/Products/Vehicles';
import Global from './Components/Multilingual/Global';
import Features from './Components/Multilingual/Features';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <main>
      <div id = "content" className = "flex flex-col items-center mx-auto">
          <Landing />
          <AboutGermans />
          <GermanFood />
          <BeerTypes />
          <GermanLanguage />
          <GermanTest />
          <Intro />
          <Vehicles />
          <Global />
          <Features />
          <Footer />
      </div>
      {/* <div id = "links">

      </div> */}
    </main>
  );
}

export default App;
