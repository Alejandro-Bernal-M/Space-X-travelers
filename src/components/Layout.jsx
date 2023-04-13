import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './Navbar/Navbar';
import { fetchMissions } from '../redux/missions/missionsSlice';
import { fetchRockets } from '../redux/Rockets/RocketsSlice';

const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
    dispatch(fetchRockets());
  }, [dispatch]);
  return (
    <div className="wrapper">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
