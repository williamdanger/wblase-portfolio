import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import "./Portfolio.css";

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <Grid>
          <h2>Portfolio</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
              <Grid>

              </Grid>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <p>
                Here are a collection of exercises and side-projects. Click through to see them in action.
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
