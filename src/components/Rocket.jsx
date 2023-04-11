import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { booking, cancelBooking } from '../redux/Rockets/RocketsSlice';

const Rocket = ({
  id, name, image, description, reserved,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="rocket">
      <div className="rocket-img-container">
        <img className="rocket-img" alt={name} src={image} />
      </div>
      <div className="rocket-info-container">
        <h2 className="rocket-title">{name}</h2>
        <p className="rocket-description">
          <span className={reserved ? 'reserved' : 'noReserved'}>Reserved</span>
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
        {/* <button
          type="button"
          className="rocket-btn-cancel"
          onClick={() => {
            dispatch(cancelBooking(id));
          }}
        >
          Cancel Reservation
        </button> */}

      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};

Rocket.defaultProps = {
  reserved: false,
};

export default Rocket;
