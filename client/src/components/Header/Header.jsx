import React from 'react';
import {useLocation} from 'react-router-dom';
import './Header.css';

const navItemsInfo = 
[
  { name: "Home", url: "/" },
  { name: "About Me", url: "/about" },
  { name: "Projects", url: "/projects" },
  { name: "Blogs", url: "/blogs" },
  { name: "Contact", url: "/contact" }
];

const NavLinks = ({ name, url }) => 
{
  const location = useLocation();
  const isActive = location.pathname === url;
  const linkClass = isActive ? "link-active" : "link";

  return (
    <a href={url} className={linkClass}>{name}</a>
  );
};

const Header = () => 
{

  return (
    <div className='navbar'>
      <div className="container navbar-content">
        <div className="name-logo">
          Niladri Roy
        </div>
        <div className="nav-links">
          {navItemsInfo.map((item, index) => (
            <NavLinks key={index} name={item.name} url={item.url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
