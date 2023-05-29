import './App.css';
import Homepage from './Components/Homepage';
import Resume from './Components/Resume';
import Education from './Components/Education';
import Projects from './Components/Projects';
import AppNavbar from './Components/AppNavbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />}/>
          <Route exact path="/resume" element={<Resume/>}/>
          <Route exact path="/projects" element={<Projects/>}/>
          <Route exact path="/education" element={<Education/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
