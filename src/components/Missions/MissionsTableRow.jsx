import PropTypes from 'prop-types';

const MissionsTableRow = ({ name, description, header }) => (
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
        >
          Join Mission
        </button>
      ) : <h3>Action</h3>}
    </div>
  </div>
);

MissionsTableRow.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  header: PropTypes.bool,
};

MissionsTableRow.defaultProps = {
  header: false,
};
export default MissionsTableRow;
