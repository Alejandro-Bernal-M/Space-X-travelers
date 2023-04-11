import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './Navbar/Navbar';
import { fetchMissions } from '../redux/missions/missionsSlice';

const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  return (
    <div className="wrapper">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
