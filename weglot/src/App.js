import './App.css';
import Landing from './Components/Landing/Landing';
import AboutGermans from "./Components/AboutGermans/AboutGermans"
import GermanFood from './Components/AboutGermans/GermanFood';
function App() {
  return (
    <main>
      <div id = "content" className = "flex flex-col items-center mx-auto xl:border-4 xl:border-red">
          <Landing />
          <AboutGermans />
          <GermanFood />
      </div>
      {/* <div id = "links">

      </div> */}
    </main>
  );
}

export default App;
