import './App.css';
import Text from './components/Text.jsx';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { Route, Routes } from 'react-router-dom';
import TextPage from './pages/Text';
import DashboardPage from './pages/DashboardPage';

function App() {
	return (
    <Routes>
      <Route path="/text" element={<TextPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
