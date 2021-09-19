import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Button } from 'bootstrap';

class RequestModal extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
dismiss = () =>{
  this.props.close && this.props.close();
}

onSave = () =>{
  this.props.request && this.props.request();
}

  render(){
  return (
    <div className="modal">
    <Card sx={{ minWidth: 275 }} >
      <CardContent>
    hi
    </CardContent>
    <CardActions>
    <Button
      onClick={() => {
        this.dismiss();
      }}
      fill="outline"
      expand="block"
      className="close-btn"
    >
      Cancel
    </Button>
    <Button
      onClick={() => {
        this.onSave();
      }}
      expand="block"
      className="save-btn"
    >
      Save
    </Button>
    </CardActions>
  </Card>
  </div>
  );
}
}

export default RequestModal
