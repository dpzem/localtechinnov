import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    display: "block"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 125
  },
  selectEmpty: {
    marginTop: theme.spacing.unit
  }
});

class SimpleSelect extends React.Component {
  state = {
    age: ""
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.root} autoComplete="off">
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-age-simple"
          />
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name="age"
                id="outlined-age-simple"
              />
            }
          >
            <MenuItem value={10}>Level 1</MenuItem>
            <MenuItem value={20}>Level 2</MenuItem>
            <MenuItem value={30}>Level 3</MenuItem>
            <MenuItem value={40}>Level 4</MenuItem>
            <MenuItem value={50}>Level 5</MenuItem>
            <MenuItem value={60}>Level 6</MenuItem>
            <MenuItem value={70}>Level 7</MenuItem>
            <MenuItem value={80}>Level 8</MenuItem>
            <MenuItem value={90}>Level 9</MenuItem>
            <MenuItem value={100}>Level 10</MenuItem>
            <MenuItem value={120}>Level 11</MenuItem>
            <MenuItem value={130}>Level 12</MenuItem>
            <MenuItem value={140}>Level 13</MenuItem>
            <MenuItem value={150}>Level 14</MenuItem>
            <MenuItem value={160}>Level 15</MenuItem>
            <MenuItem value={170}>Level 16</MenuItem>
            <MenuItem value={180}>Level 17</MenuItem>
            <MenuItem value={190}>Level 18</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleSelect);
