import PropTypes from 'prop-types';
import '../../styles/Profile.css';

const ProfileList = ({
  title, elements, propertyName, dataTestId,
}) => (
  <div data-testid={dataTestId}>
    <h2>{title}</h2>
    <div
      className="profile-list-elements-container"
    >
      {elements.length === 0 && (
      <div className="profile-list-element">
        <p>
          You don&apos;t have any reservation yet
        </p>
      </div>
      )}
      {elements.map((element) => (
        <div key={element.name} className="profile-list-element">
          <p>{element[propertyName]}</p>
        </div>
      ))}
    </div>
  </div>
);

ProfileList.propTypes = {
  title: PropTypes.string.isRequired,
  elements: PropTypes.instanceOf(Array).isRequired,
  propertyName: PropTypes.string,
  dataTestId: PropTypes.string.isRequired,
};

ProfileList.defaultProps = {
  propertyName: 'mission_name',
};

export default ProfileList;
