import React, { Component } from "react";
import "./Layouts.css";
import "./Home.css";
import { Col, Row, Layout } from "antd";
import { Link } from "@reach/router";
import banner from "../images/book1.jpg";
import book1 from "../images/book1.jpg";

class Home extends Component {
  render() {
    const { Content } = Layout;

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
        <Row>
          <Layout>
            <h4 className="front-title">HOW IT WORKS</h4>
            <section>
              <Content>
                <Row style={{ height: "290px" }}>
                  <Col span={8} style={{ height: "100%", textAlign: "center" }}>
                    <img
                      src={banner}
                      style={{ maxWidth: "auto", height: "200px" }}
                      alt="book"
                    />
                    <p className="front-description">
                      Schedule and vist one of our centers
                    </p>
                  </Col>
                  <Col span={8} style={{ height: "100%", textAlign: "center" }}>
                    <img
                      src={banner}
                      style={{ maxWidth: "auto", height: "200px" }}
                      alt="book"
                    />
                    <p className="front-description">
                      Schedule and vist one of our centers
                    </p>
                  </Col>
                  <Col span={8} style={{ height: "100%", textAlign: "center" }}>
                    <img
                      src={banner}
                      style={{ maxWidth: "auto", height: "200px" }}
                      alt="book"
                    />
                    <p className="front-description">
                      Schedule and vist one of our centers
                    </p>
                  </Col>
                </Row>
              </Content>
            </section>
          </Layout>
        </Row>
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
