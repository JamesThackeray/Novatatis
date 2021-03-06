import * as React from "react";
import { Card, Container } from "@mui/material";
import "./Projects.css";
import RequestModal from "../components/RequestModal";
import { Grid } from "@mui/material";
import { CardContent, CardActions } from "@mui/material";
import { Typography } from "@mui/material";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { listProjects } from "../graphql/queries";
import { Modal } from "react-bootstrap";
import ViewProjectDetails from "../components/ViewProjectDetails";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      RequestShow: false,
      openView: false,
      projects: [],
      selectedProject: "",
      clientId: "",
    };
    this.showRequestModal = this.showRequestModal.bind(this);
    this.hideRequestModal = this.hideRequestModal.bind(this);
  }

  showRequestModal = () => {
    this.setState({ RequestShow: true });
  };

  hideRequestModal = () => {
    this.setState({ RequestShow: false });
  };
  setClientId = async () => {
    try {
      await Auth.currentUserInfo().then((user) => {
        this.setState({
          clientId: user.username,
        });
      });
    } catch (err) {
      console.log(err);
    }
  };

  getData = async () => {
    try {
      const result = await API.graphql(graphqlOperation(listProjects));
      const projects = result.data.listProjects.items;
      const user = await Auth.currentAuthenticatedUser();
      console.log(projects);
      const temp = projects.filter(
        (project) => project.clientId === user.attributes.sub
      );
      this.setState({ projects: temp });
      console.log("state", temp);
    } catch (err) {
      console.log(err);
    }
  };
  componentDidMount() {
    this.getData();
  }

  handleRequestClose = () => {
    this.setState({ RequestShow: false });
  };

  handleViewClose = () => {
    this.setState({ openView: false });
  };

  projectDetails = (projectid) => {
    this.setState({ openView: true, selectedProject: projectid });
  };

  viewProjects = () => {
    return (
      <div>
        <Grid
          container
          spacing={{ xs: 1, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {this.state.projects.map((index) => {
            return (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Card sx={{ minWidth: 275 }} key={index.projectid}>
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
              onClick={this.showRequestModal}
            >
              Request A Project
            </button>
            <Modal
              show={this.state.RequestShow}
              className="modal"
              onHide={() => {
                this.handleRequestClose();
              }}
            >
              <RequestModal close={this.handleRequestClose} />
            </Modal>
          </div>
          <Container fixed className="projectsList">
            {this.viewProjects()}
            <Modal
              show={this.state.openView}
              className="modal"
              onHide={() => {
                this.handleViewClose();
              }}
            >
              <ViewProjectDetails
                projects={this.state.projects}
                selectedProject={this.state.selectedProject}
                close={this.handleViewClose}
              />
            </Modal>
          </Container>
        </div>
      </>
    );
  }
}

export default Project;
