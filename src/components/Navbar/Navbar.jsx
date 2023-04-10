 import Logo from './planet.png';
 import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {path: '/', text: 'Rockets'},
    {path: 'missions', text: 'Missions'},
    {path: 'myprofile', text: 'My profile'}
  ];

  return (
    <nav className="navbar">
      <div className="nav-title">
        <img className="logo" src={Logo} alt="logo"/>
        <h1>Space Travelers' Hub</h1>
      </div>
      <ul className='nav-ul'>
        {links.map((item) => {
          return (
          <li className='nav-li'>
            <NavLink className="navlink" to={item.path}>
              {item.text}
            </NavLink>  
          </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar;