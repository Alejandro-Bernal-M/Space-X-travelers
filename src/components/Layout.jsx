import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

const Layout = () => (
  <div className="wrapper">
    <Navbar />
    <Outlet />
  </div>
);

export default Layout;
