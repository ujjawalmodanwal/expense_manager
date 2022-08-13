import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/salads">
        Profile
      </a>
      <a className="menu-item" href="/pizzas">
        Summary
      </a>
      <a className="menu-item" href="/desserts">
        Logout
      </a>
    </Menu>
  );
};
