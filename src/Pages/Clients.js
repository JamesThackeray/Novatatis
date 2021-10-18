import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { listClients } from "../graphql/queries";

class Clients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
    };
  }

  getClients = async () => {
    try {
      const result = await API.graphql(graphqlOperation(listClients));
      const clients = result.data.listClients.items;

      this.setState({ clients });
      console.log("state", clients);
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.getClients();
  }

  render() {
    return (
      <div className="clients">
        <Paper sx={{ width: "100%" }}>
          <TableContainer
            sx={{ maxHeight: 500 }}
            component={Paper}
            className="Table"
          >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow className="tableTitle">
                  <TableCell>Email</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Phone Number</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.clients.map((row) => (
                  <TableRow key={row.email}>
                    <TableCell
                      component="th"
                      scope="row"
                      align={row.email}
                      style={{ minWidth: row.email }}
                    >
                      {row.email}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align={row.firstName}
                      style={{ minWidth: row.firstName + " " + row.lastName }}
                    >
                      {row.firstName + " " + row.lastName}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align={row.phoneNumber}
                      style={{ minWidth: row.phoneNumber }}
                    >
                      {row.phoneNumber}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    );
  }
}

export default Clients;
