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
  const reservedRockets = useSelector((store) => {
    const reserved = store.rockets.rockets.filter((elem) => {
      if (elem.reserved) {
        return elem;
      }
      return false;
    });
    return reserved;
  })
  return (
    <div className="profile-container">
      <ProfileList
        title="Missions"
        elements={reservedMissions}
        propertyName="name"
      />
      <ProfileList
        title="Rockets"
        elements={reservedRockets}
        propertyName="name"
      />
    </div>
  );
};

export default Profile;
