import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import missionsSlice from '../../redux/missions/missionsSlice';

const { joinMission } = missionsSlice.actions;

const MissionsTableRow = ({
  name, description, id, reserved,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="missions-table-row">
      <div className="missions-table-cell">
        <h3>{name}</h3>
      </div>
      <div className="missions-table-cell table-description">
        <p>{description}</p>
      </div>
      <div className="missions-table-cell mission-button-container">
        <button
          type="button"
          className={reserved ? 'isMember-button' : 'not-member-button'}
        >
          {reserved ? 'Active member' : 'not a member'}
        </button>
      </div>
      <div className="missions-table-cell mission-button-container">
        <button
          type="button"
          className={reserved ? 'leave-mission-button' : 'join-mission-button'}
          onClick={() => { dispatch(joinMission(id)); }}
        >
          {reserved ? 'Leave Mission' : 'Join Mission'}
        </button>
      </div>
    </div>
  );
};

MissionsTableRow.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string,
  reserved: PropTypes.bool.isRequired,
};

MissionsTableRow.defaultProps = {
  id: '',
};
export default MissionsTableRow;
