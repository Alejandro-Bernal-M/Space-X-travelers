import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
import missionsSlice from '../../redux/missions/missionsSlice';

const { joinMission } = missionsSlice.actions;

const MissionsTableRow = ({
  name, description, header, id,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="missions-table-row">
      <div className="missions-table-cell">
        <h3>{name}</h3>
      </div>
      <div className="missions-table-cell table-description">
        {header ? <h3>{description}</h3> : <p>{description}</p>}
      </div>
      <div className="missions-table-cell mission-button-container">
        { !header ? (
          <button
            type="button"
            className="not-member-button"
          >
            not a member
          </button>
        ) : <h3>Status</h3>}
      </div>
      <div className="missions-table-cell mission-button-container">
        { !header ? (
          <button
            type="button"
            className="join-button"
            onClick={() => { dispatch(joinMission(id)); }}
          >
            Join Mission
          </button>
        ) : <h3>Action</h3>}
      </div>
    </div>
  );
};

MissionsTableRow.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  header: PropTypes.bool,
  id: PropTypes.string,
};

MissionsTableRow.defaultProps = {
  header: false,
  id: '',
};
export default MissionsTableRow;
