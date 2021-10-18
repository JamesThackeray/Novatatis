import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import "./RequestModal.css";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { createProjects } from "../graphql/mutations";

class RequestModal extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      clientId: "",
      room:"",
      address:"",
      budget:'',
      meterage: 0
    }
  }

dismiss=()=>{
  this.props.close && this.props.close();
}

onSave = async() =>{
    try {
      await Auth.currentUserInfo()
     .then(user => {
       this.setState({
           clientId: user.username 
       })
      })
      const date=new Date()
      const input = {
      clientId: this.state.clientId,
      Room: this.state.room,
      Address:this.state.address,
      Budget:this.state.budget,
      SquareMeterage: this.state.meterage,
      DateStarted: date.toISOString().slice(0,10),
      Status: "Requested"
   }
      const result = await API.graphql(graphqlOperation(createProjects, { input }));
      
      console.log("update", result);
    } catch (err) {
      console.log(err);
    }
  
  
}
SquareMeterageChange = (text) =>{
  this.setState({meterage: text });
}

BudgetChange = (text) =>{
  this.setState({budget:text});
}

RoomChange = (text) =>{
  this.setState({room:text});
}

AddressChange = (text) =>{
  this.setState({address:text});
}


 render(){
  return (
      <Card sx={{ minWidth: 275 }} className="window" >
          <CardContent>
            <div className="title">Request A Project</div>
            <input type="text" pattern="[0-9]*" placeholder="Budget" className="inputs" onChange={(e)=>{this.BudgetChange(e.target.value)}}></input>
            <br/>
            <input type="text" pattern="[0-9]*" placeholder="Square Meterage" className="inputs" onChange={(e)=>{this.SquareMeterageChange(e.target.value)}}></input>
            <br/>
            <input placeholder="Room" className="inputs" onChange={(e)=>{this.RoomChange(e.target.value)}}></input>
            <br/>
            <input placeholder="Address" className="inputs" onChange={(e)=>{this.AddressChange(e.target.value)}}></input>
          </CardContent>
          <CardActions>
            <button
            type="button"
            onClick={() => {
              this.dismiss();
            }}
            
            className="close-btn"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              this.onSave();
            }}
            type="button"
            expand="block"
            className="save-btn"
          >
            Request Project
          </button>
        </CardActions>
    </Card>

  );
}
}

export default RequestModal
