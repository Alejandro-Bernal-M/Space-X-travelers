import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { booking, cancelBooking } from '../redux/Rockets/RocketsSlice';

const Rocket = ({
  id, name, image, description, reserved, count,
}) => {
  const dispatch = useDispatch();
  return (
    <div className={count % 2 === 0 ? 'rocket' : 'rocket reverse-column'}>
      <div className="rocket-img-container">
        <img className="rocket-img" alt={name} src={image} />
      </div>
      <div className="rocket-info-container">
        <h2
          className="rocket-title"
        >
          {name}
        </h2>
        <span
          className={reserved ? 'reserved' : 'noReserved'}
        >
          Reserved
        </span>
        <p className="rocket-description">
          {description}
        </p>
        <button
          type="button"
          className={reserved ? 'rocket-btn-cancel' : 'rocket-btn'}
          onClick={() => {
            if (!reserved) {
              dispatch(booking(id));
            } else {
              dispatch(cancelBooking(id));
            }
          }}
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket' }
        </button>
      </div>
      <hr className="rocket-divisor" />
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
  count: PropTypes.number.isRequired,
};

Rocket.defaultProps = {
  reserved: false,
};

export default Rocket;
