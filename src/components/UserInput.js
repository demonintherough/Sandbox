import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {Help} from '@material-ui/icons'
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    color: "#ffffff",
  },
  dense: {
    marginTop: 16,
  },
  infoButton: {
    marginLeft: 0,
    marginTop: 16,
    marginBottom: 8,
    height: 56,
    minWidth: 10,
    width: 18,
    backgroundColor: '#878787',
    color: "#27272F",
    borderBottomLeftRadius: '0',
    borderTopLeftRadius: '0',
    borderBottomRightRadius: '0',
  },
  floatingLabelFocusStyle: {
    color: '#F2F2F3',
    "&.Mui-focused":{
      color: '#f2f2f3'
    }
  },
  menu: {
    width: 200,
  },
}));


export default function UserInput(props) {
  const classes = useStyles();
    return(
      <React.Fragment>
        <Grid container spacing ={0} justify = 'flex-start'>
          <Grid item>
        <TextField
          id="filled-name"
          label={props.label}
          className={classes.textField}
          margin="normal"
          variant="filled"
          InputLabelProps={{className: classes.floatingLabelFocusStyle}}
        />
          </Grid>
          <Grid item>
            <Tooltip placement='right' title={props.tooltip}>
            <Button className={classes.infoButton}>
              <Help style={{height: '12px'}}/>
            </Button>
            </Tooltip>
          </Grid>
        </Grid>
      </React.Fragment>
    )

}

UserInput.defaultProps = {
  label: 'Temporary',
  tooltip: 'Once upon a midnight dreary, while I pondered weak and weary',
}