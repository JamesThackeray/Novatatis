import * as React from "react";
import { Card, Container } from "@mui/material";
import "./Projects.css";
import RequestModal from "../components/RequestModal";
import { Grid } from "@mui/material";
import { CardContent, CardActions } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "bootstrap";
import { API, graphqlOperation } from "aws-amplify";
import { listProjects } from "../graphql/queries";
import ModalUnstyled from "@mui/core/ModalUnstyled";
import ViewProjectDetails from "../components/ViewProjectDetails";

/*
      request to cancel 
      view designs 
        give feedback 
  request projects */
class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openRequest: false,
      openView: false,
      projects: [],
      selectedProject: "",
    };
  }

  getData = async () => {
    try {
      const result = await API.graphql(graphqlOperation(listProjects));
      const projects = result.data.listProjects.items;
      this.setState({ projects });
      console.log("state", projects);
    } catch (err) {
      console.log(err);
    }
  };
  componentDidMount() {
    this.getData();
  }

  onClickRequest = () => {
    console.log("open");
    this.setState({ openRequest: true });
  };

  handleRequest = () => {};

  handleClose = () => {
    this.setState({ openRequest: false, openView: false });
  };

  projectDetails = (projectid) => {
    this.setState({ openView: true, selectedProject: projectid });
  };

  viewProjects = () => {
    return (
      <div>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {this.state.projects.map((index) => {
            return (
              <Grid item xs={4} key={index.id}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Started :{index.DateStarted}
                    </Typography>
                    <Typography variant="h5" component="div">
                      Room: {index.Room}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Status:{index.Status}
                    </Typography>
                    <Typography variant="body2">
                      Square Meterage: {index.SquareMeterage}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <button
                      type="button"
                      className="view"
                      onClick={() => this.projectDetails(index.id)}
                    >
                      view details
                    </button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  };

  render() {
    return (
      <>
        <div>
          <div className="projects">
            <button
              type="button"
              className="request"
              onClick={this.onClickRequest}
            >
              Request A Project
            </button>
            <ModalUnstyled
              open={this.state.openRequest}
              onClose={this.handleClose}
            >
              <RequestModal
                close={this.handleClose}
                request={this.handleRequest}
              />
            </ModalUnstyled>
          </div>
          <Container fixed className="projectsList">
            {this.viewProjects()}
            <ModalUnstyled
              open={this.state.openView}
              onClose={this.handleClose}
            >
              <ViewProjectDetails />
            </ModalUnstyled>
          </Container>
        </div>
      </>
    );
  }
} /* */

export default Project;
