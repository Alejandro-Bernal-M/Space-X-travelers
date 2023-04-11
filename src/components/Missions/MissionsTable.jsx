import { useSelector } from 'react-redux';
import MissionsTableRow from './MissionsTableRow';
import MissionsTableHead from './MissionsTableHead';

const MissionsTable = () => {
  const missions = useSelector((state) => state.missions.missions);
  return (
    <div className="missions-table">
      <MissionsTableHead />
      {missions.map((element) => (
        <MissionsTableRow
          key={element.mission_id}
          name={element.mission_name}
          description={element.description}
          id={element.mission_id}
          reserved={element.reserved}
        />
      ))}
    </div>
  );
};

export default MissionsTable;
