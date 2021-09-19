import * as React from "react";
import { Card, Container } from "@mui/material";
import button from "bootstrap";
import "./Projects.css";
import { Box } from "@mui/system";
import RequestModal from "../components/RequestModal";
import { Grid } from "@mui/material";
import Item from "@mui/material";
import { CardContent, CardActions } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "bootstrap";

import { API, graphqlOperation } from "aws-amplify";
import { listProjects } from "../graphql/queries";

import ModalUnstyled from "@mui/core/ModalUnstyled";

/* view Projects 
      request to cancel 
      view designs 
        give feedback 
  request projects */
class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  getData = async () => {
    try {
      const result = await API.graphql(graphqlOperation(listProjects));
      console.log("data", result);
    } catch (err) {
      console.log(err);
    }
  };
  componentDidMount() {
    this.getData();
  }

  onClick = () => {
    console.log("open");
    this.setState({ open: true });
  };

  handleRequest = () => {};

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <>
        <div className="projects">
          <button type="button" className="request" onClick={this.onClick}>
            Request A Project
          </button>
          <ModalUnstyled open={this.state.open} onClose={this.handleClose}>
            <RequestModal
              close={this.handleClose}
              request={this.handleRequest}
            />
          </ModalUnstyled>
        </div>
        <Container fixed>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Word of the Day
                  </Typography>
                  <Typography variant="h5" component="div">
                    hi
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                  </Typography>
                  <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <button size="small">Learn More</button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>hi</Card>
            </Grid>
            <Grid item xs={4}>
              <Card>hi</Card>
            </Grid>
            <Grid item xs={4}>
              <Card>hi</Card>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}

export default Projects;
