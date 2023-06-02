import Styles from './App.module.css';
import Homepage from './Components/Homepage';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import AppNavbar from './Components/AppNavbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div id="App" className={ window.location.pathname === "/Portfolio-Website/" ? `${Styles.HomepageBackground} ${Styles.App}`  : `${Styles.App}` }>
      <AppNavbar/>
      <Router basename='/Portfolio-Website'>
        <Routes>
          <Route exact path="/" element={<Homepage />}/>
          <Route exact path="/resume" element={<Resume/>}/>
          <Route exact path="/projects" element={<Projects/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
