import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Landing from './Components/Landing/Landing';
import AboutGermans from "./Components/AboutGermans/AboutGermans"
import GermanFood from './Components/AboutGermans/GermanFood';
import BeerTypes from './Components/AboutGermans/BeerTypes';
import GermanLanguage from './Components/AboutGermanLanguage/GermanLanguage';
import GermanTest from './Components/AboutGermanLanguage/GermanTest';
import Intro from './Components/Products/Intro';
function App() {
  return (
    <main>
      <div id = "content" className = "flex flex-col items-center mx-auto xl:border-4 xl:border-red">
          <Landing />
          <AboutGermans />
          <GermanFood />
          <BeerTypes />
          <GermanLanguage />
          <GermanTest />
          <Intro />
      </div>
      {/* <div id = "links">

      </div> */}
    </main>
  );
}

export default App;
