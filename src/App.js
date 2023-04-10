import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Rockets from './routes/Rockets';
import NotMatch from './routes/NotMatch';
import Missions from './routes/Missions';
import Profile from './routes/Profile';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Rockets />} />
      <Route path="missions" element={<Missions />} />
      <Route path="myprofile" element={<Profile />} />
      <Route path="*" element={<NotMatch />} />
    </Route>
    </Routes>
  );
}

export default App;
