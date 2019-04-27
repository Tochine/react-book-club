import React, { Component } from "react";
import "./Layouts.css";
import { Col, Row } from "antd";
import { Link } from "@reach/router";
import banner from "../images/book1.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <section style={{ minHeight: "600px" }}>
          <Col
            span={24}
            style={{
              background: `url(${banner})`,
              backgroundSize: "cover",
              height: "600px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <h3 style={styles.bannerText}>
              THE BEST WEBSITE FOR EVERYTHING BOOK
            </h3>
            <br />
            <Link
              to="/signin"
              className="signin"
              style={{ marginLeft: "50px" }}
            >
              Create Account
            </Link>
          </Col>
        </section>
      </div>
    );
  }
}

const styles = {
  bannerText: {
    fontSize: "40px",
    color: "mediumblue",
    fontWeight: 700
  }
};

export default Home;
