import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Button } from "react-bootstrap";
import SocialMediaIcons from "react-social-media-icons";
import "./Home.css";

export default class Home extends Component {
  render() {
    const socialMediaIcons = [
      {
        url: "https://github.com/williamdanger",
        className: "fab fa-github-square"
      },
      {
        url: "https://linkedin.com/in/williamblase",
        className: "fab fa-linkedin"
      },
      {
        url: "mailto:william.blase@gmail.com",
        className: "fas fa-envelope"
      }
    ];
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome.</h2>
          <p>
            This site serves as my portfolio and an example of a Single Page
            React App{" "}
          </p>
          <Link to="/about">
            <Button bsStyle="primary">Learn More About Me</Button>
          </Link>
        </Jumbotron>
        <h3 align="center">Connect with Me</h3>
        <Row className="show-grid text-center">
          <SocialMediaIcons
            icons={socialMediaIcons}
            iconSize={"200em"}
            iconColor={"#495056"}
          />
        </Row>
      </Grid>
    );
  }
}
