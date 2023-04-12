import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { path: '/', text: 'Rockets' },
    { path: 'missions', text: 'Missions' },
    { path: 'myprofile', text: 'My profile' },
  ];

  return (
    <nav className="navbar">
      <h1 className="nav-title">Space X Travelers</h1>
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
