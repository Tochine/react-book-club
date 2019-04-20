import React, { Component } from "react";
import "./Layouts.css";
import { Link } from "@reach/router";
import { Menu, Dropdown, Icon } from "antd";

class FrontendLayouts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className="header">
        <div className="logo">
          <Link to="/">TOCHINE BOOKS</Link>
        </div>
        <nav className="menu">
          <div>
            <Dropdown overlay={menu}>
              <Link to="#">
                Books <Icon type="down" />
              </Link>
            </Dropdown>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/faq">faq</Link>
          </div>
          <div>
            <Link to="/signin" className="signin">
              Sign In
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}

const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/books/top">Top Books</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/books/naija">Naija Books</Link>
    </Menu.Item>
  </Menu>
);

export default FrontendLayouts;
