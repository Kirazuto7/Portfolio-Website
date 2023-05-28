import './App.css';
import Homepage from './Components/Homepage';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
