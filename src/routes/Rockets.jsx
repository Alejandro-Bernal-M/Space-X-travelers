import { useDispatch, useSelector } from 'react-redux';
import Rocket from '../components/Rocket';

const Rockets = () => {
  const rockets = useSelector((store) => store.rockets);
 
  return (
    <div className="rockets-holder">
      {rockets.rockets.map((item) => (
        <Rocket
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          description={item.description}
          reserved={item.reserved}
        />
      ))}
    </div>
  );
};

export default Rockets;
