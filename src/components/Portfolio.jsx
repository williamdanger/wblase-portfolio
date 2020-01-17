import React, { Component } from "react";
import { Grid, Row, Col, Button, Thumbnail } from "react-bootstrap";
import "./Portfolio.css";

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <Grid>
          <h2>Portfolio</h2>
          <Row>
            <Col xs={8} sm={6} className="main-section">
              <Thumbnail src="assets/app-1.png" alt="121x100">
                <h3>Portfolio Site</h3>
                <p>A React SPA using react-bootstap component library</p>
                <p>
                  <Button
                    bsStyle="primary"
                    href="https://jovial-einstein-dd01fa.netlify.com/"
                  >
                    Live Demo
                  </Button>
                  &nbsp;
                  <Button
                    bsStyle="default"
                    href="https://github.com/williamdanger/wblase-portfolio"
                  >
                    Github Source
                  </Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <p>
                A collection of exercises and side-projects. Click through to
                see the live version or source.
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
