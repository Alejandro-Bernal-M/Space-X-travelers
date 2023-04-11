import { useSelector } from 'react-redux';
import ProfileList from '../components/Profile/ProfileList';

const Profile = () => {
  const reservedMissions = useSelector((state) => {
    const reserved = state.missions.missions.filter((element) => {
      if (element.reserved) {
        return element;
      }
      return false;
    });
    return reserved;
  });
  const mockData = [
    { name: 'Apolo' },
    { name: 'Mars34' },
    { name: 'Mooner8' },
  ];
  return (
    <div className="profile-container">
      <ProfileList
        title="Missions"
        elements={reservedMissions}
        propertyName="mission_name"
      />
      <ProfileList
        title="Rockets"
        elements={mockData}
        propertyName="name"
      />
    </div>
  );
};

export default Profile;
