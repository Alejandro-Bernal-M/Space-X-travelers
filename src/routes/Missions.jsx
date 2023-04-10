import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  return (
    <div>missions</div>
  );
};

export default Missions;
