import React from "react";
import { Grid } from "@mui/material";
import { CardContent, CardActions } from "@mui/material";
import { Typography } from "@mui/material";
import { Card } from "@mui/material";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { updateProjects } from "../graphql/mutations";

class ViewProjectDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],

      selectedProject: "",
    };
  }
  componentDidMount() {
    const projectprop = this.props.projects;
    this.setState({
      projects: projectprop,
      selectedProject: this.props.selectedProject,
    });
  }

  dismiss = () => {
    this.props.close && this.props.close();
  };

  projectDetails = () => {
    const projectdetails = this.state.projects.find(
      (index) => index.id === this.state.selectedProject
    );

    if (projectdetails !== undefined) {
      return (
        <div>
          <Grid item xs={4} key={projectdetails.id}>
            <div className="boxTitle">
              <div className="title">Project Details</div>
            </div>
            <Typography sx={{ mb: 1.5 }} color="text.secondary" gutterBottom>
              Date Started : {projectdetails.DateStarted}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Room: {projectdetails.Room}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Status:{projectdetails.Status}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Square Meterage: {projectdetails.SquareMeterage}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Designer: {projectdetails.designerID}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Budget: {projectdetails.Budget}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Shopping list: {projectdetails.ShoppingList}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Presentation Boards: {projectdetails.PresentationBoards}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Plans: {projectdetails.Plans}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Date Finished: {projectdetails.DateFinished}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Address: {projectdetails.Address}
            </Typography>
          </Grid>
        </div>
      );
    } else {
      return <div>error</div>;
    }
  };

  requesttoCancel = async () => {
    try {
      const input = {
        id: this.state.selectedProject,
        Status: "Please Cancel",
      };
      console.log("input", input);
      const result = await API.graphql(
        graphqlOperation(updateProjects, { input })
      );
      console.log("cancel", result);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Card sx={{ minWidth: 275 }} className="window">
        <CardContent>
          <div>{this.projectDetails()}</div>
        </CardContent>
        <CardActions>
          <button
            type="button"
            className="close-btn"
            onClick={() => {
              this.dismiss();
            }}
          >
            Back
          </button>
          <button
            type="button"
            className="close-btn"
            onClick={() => {
              this.requesttoCancel();
            }}
          >
            Cancel Project
          </button>
        </CardActions>
      </Card>
    );
  }
}

export default ViewProjectDetails;
