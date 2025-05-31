import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PartLookupPage from '@/views/PartLookupPage';
import ExclusionsPage from '@/views/ExclusionsPage';
import HomePage from '@/views/HomePage';
import '@/styles/app.scss';

// The root component of the application that sets up the routes
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/part-lookup" element={<PartLookupPage />} />
        <Route path="/exclusions" element={<ExclusionsPage />} />
      </Routes>
    </Router>
  );
}