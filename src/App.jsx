import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DownloadPage from './DownloadPage';
import HomePage from './HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/download" element={<DownloadPage />} />
      </Routes>
    </Router>
  );
}

export default App;
