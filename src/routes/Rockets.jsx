import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets } from '../redux/Rockets/RocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  return (
    <div>Rockets</div>
  );
};

export default Rockets;
