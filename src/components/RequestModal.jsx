import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import "./RequestModal.css";

class RequestModal extends React.Component{
dismiss=()=>{
  this.props.close && this.props.close();
}

 render(){
  return (
    
              <Card sx={{ minWidth: 275 }} className="window" >
                <CardContent>
                  <input placeholder="room"></input>
                  <input placeholder="room"></input>
                  <input placeholder="room"></input>
                  <input placeholder="room"></input>
                  <input placeholder="room"></input>
                  <input placeholder="room"></input>
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
                  Save
                </button>
              </CardActions>
          </Card>
      
  );
}
}

export default RequestModal
