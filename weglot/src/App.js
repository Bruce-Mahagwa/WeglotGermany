import './App.css';
import Landing from './Components/Landing/Landing';
import AboutGermans from "./Components/AboutGermans/AboutGermans"
function App() {
  return (
    <main>
      <div id = "content" className = "flex flex-col items-center mx-auto">
          <Landing />
          <AboutGermans />
      </div>
      {/* <div id = "links">

      </div> */}
    </main>
  );
}

export default App;
