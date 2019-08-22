import React from 'react'
import {Card} from '@material-ui/core'
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
  paper: {
    backgroundColor: '#363640',
    width: '100px'
  },

});

export class SwitchWarning extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const classes = this.props;
    return (
      <React.Fragment>
        <Card className = {classes.paper}>

          Hello World
        </Card>
      </React.Fragment>
    )
  }

}

export default (withStyles(styles))(SwitchWarning)