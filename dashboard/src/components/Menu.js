import React , {useState} from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  }
  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  }
  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.svg" style={{ width: "180px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link to="/dashboard" style={{ textDecoration: "none" }} onClick={()=>handleMenuClick(0)}>
              <p className={selectedMenu===0 ? activeMenuClass: menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/orders" onClick={()=>handleMenuClick(1)} style={{ textDecoration: "none" }}>
              <p className={selectedMenu===1 ? activeMenuClass: menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link to="/holdings" onClick={()=>handleMenuClick(2)} style={{ textDecoration: "none" }}>
              <p className={selectedMenu===2 ? activeMenuClass: menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link to="/positions" onClick={()=>handleMenuClick(3)} style={{ textDecoration: "none" }}>
              <p className={selectedMenu===3 ? activeMenuClass: menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link to="/funds" onClick={()=>handleMenuClick(4)} style={{ textDecoration: "none" }}>
              <p className={selectedMenu===4 ? activeMenuClass: menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link to="/apps" onClick={()=>handleMenuClick(5)} style={{ textDecoration: "none" }}>
              <p className={selectedMenu===5 ? activeMenuClass: menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
        {
          isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <ul>
                <li>Profile</li>
                <li>Settings</li>
                <li>Logout</li>
              </ul>
            </div>
          )
        }      
        </div>
    </div>
  );
};

export default Menu;
