import PropTypes from 'prop-types';

const Rocket = ({
  id, name, image, description,
}) => (
  <div className="rocket">
    <div className="rocket-img-container">
      <img className="rocket-img" alt={name} src={image} />
    </div>
    <div className="rocket-info-container">
      <h2 className="rocket-title">{name}</h2>
      <p className="rocket-description">{description}</p>
      <button
        type="button"
        className="rocket-btn"
        onClick={(id)}
      >
        Reserve Rocket
      </button>
    </div>
  </div>
);

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Rocket;
