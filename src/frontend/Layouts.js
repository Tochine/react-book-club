import React, { Component } from "react";
import "./Layouts.css";
import { Link } from "@reach/router";
import { Menu, Dropdown, Icon, Affix } from "antd";

class FrontendLayouts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Affix OffsetTop={0}>
          <header className="header" fixed="top">
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
        </Affix>
        {this.props.children}
        <footer style={styles.footer}>
          <div>2019 BookClubs. All Right Reserves</div>
        </footer>
      </>
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

const styles = {
  footer: {
    height: "61px",
    width: "100%",
    backgroundColor: "#000000",
    color: "#545454",
    display: "flex",
    justifyContent: "center",
    alignItem: "center"
  }
};

export default FrontendLayouts;
