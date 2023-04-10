import '../styles/Missions.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionsSlice';
import MissionsTable from '../components/Missions/MissionsTable';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  return (
    <section className="missions-main-container">
      <MissionsTable />
    </section>
  );
};

export default Missions;
