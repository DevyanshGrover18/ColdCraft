import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import GeneratorPage from './pages/GeneratorPage';

function App() {
  return (
    <Router>
      <div className="bg-pattern"></div>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/generate" element={<GeneratorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;