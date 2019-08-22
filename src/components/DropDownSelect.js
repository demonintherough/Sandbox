import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {Help} from '@material-ui/icons'
import Tooltip from "@material-ui/core/Tooltip";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  dense: {
    marginTop: 16,
  },
  textField: {
    color: "#f2f2f3",
  },
  selector: {
    color: "#ffffff",
    backgroundColor: '#27272f',
    marginLeft: theme.spacing(1),
    minWidth: 120,
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
    "&.Mui-focused": {
      color: '#f2f2f3'
    }
  },
  menu: {
    width: 200,
  },
}));

export default function DropDownSelect(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container spacing={0} justify='flex-start'>
        <Grid item>
            <Select
              className = {classes.selector}
              value = {1}
              input={
                <TextField
                  id="filled-name"
                  label={props.label}
                  margin="normal"
                  variant="filled"
                  InputLabelProps={{className: classes.floatingLabelFocusStyle}}
                  InputProps={{className: classes.textField}}
                />
              }
            >
              <MenuItem value = {1}>Test1</MenuItem>
              <MenuItem value = {2}>Test2</MenuItem>
              <MenuItem value = {3}>Test3</MenuItem>
            </Select>
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

DropDownSelect.defaultProps = {
  label: 'Temporary',
  tooltip: 'This is a dropdown thing.  You need to specify what the width is because it doesn\'t do it automatically.',
}