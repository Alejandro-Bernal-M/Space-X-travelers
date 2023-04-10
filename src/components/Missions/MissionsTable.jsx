import { useSelector } from 'react-redux';
import MissionsTableRow from './MissionsTableRow';

const MissionsTable = () => {
  const missions = useSelector((state) => state.missions.missions);
  return (
    <div className="missions-table">
      <MissionsTableRow
        name="Mission"
        description="Description"
        header
      />
      {missions.map((element) => (
        <MissionsTableRow
          key={element.mission_id}
          name={element.mission_name}
          description={element.description}
        />
      ))}
    </div>
  );
};

export default MissionsTable;
