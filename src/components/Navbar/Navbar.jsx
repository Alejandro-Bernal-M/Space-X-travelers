import { NavLink } from 'react-router-dom';
import Logo from './planet.png';

const Navbar = () => {
  const links = [
    { path: '/', text: 'Rockets' },
    { path: 'missions', text: 'Missions' },
    { path: 'myprofile', text: 'My profile' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-title">
        <img className="logo" src={Logo} alt="logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <ul className="nav-ul">
        {links.map((item) => (
          <li key={item.text} className="nav-li">
            <NavLink className="navlink" to={item.path}>
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
