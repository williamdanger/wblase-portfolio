import React, { Component } from "react";
import { Grid, Col, Image } from "react-bootstrap";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <h3>William Blase</h3>
            <p>
              A jack-of-all trades. He's had a few different careers spanning
              electrician, recording engineer, amateur brewmaster, and finally
              settling into Software Engineering since 2013.
            </p>
            <p>
              As a lifelong learner he is always taking on new responsibilities
              and acquiring new skill sets.
            </p>
            <p>
              The bulk of his technology experience has been in the DevOps / SRE
              sphere focusing on Continuous Integration & Deployment,
              Infrastructure-as-Code, Developer Tooling, and Configuration
              Management.
            </p>
            <p>
              More recently he has rediscovered a passion for Front-End
              Engineering and User Experience mainly using React.{" "}
            </p>
            <Image
              src="assets/person-1.png"
              className="about-profile-pic"
              rounded
            />
          </Col>
        </Grid>
      </div>
    );
  }
}
