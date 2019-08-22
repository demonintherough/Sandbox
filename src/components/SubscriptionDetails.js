
import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField'


const useStyles = makeStyles(theme => ({
  name: {
    backgroundColor: '#000000',
  }

}))

export default function DropDownSelect(props) {
  const classes = useStyles();

  return(
    <React.Fragment>
      <Grid container direction = "column">
        <Grid item>
          <TextField
            className = {classes.name}
            value = {props.name}
          />
        </Grid>
        <Grid item>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}


DropDownSelect.defaultProps = {
  name: 'Mega City',
  startDate: '10 Aug 2019',
  endDate: '10 Dec 2019',
  authorName: 'Agent Smith',
  numberOfSubscribers: '12',
  listOfSubscribers: {'agency': 'Machine City Disco Kings', 'eMail': 'SmithA@MachineCity.com', 'ucEmail': "5558675309", "tcEmail":'5558675308'}
}
