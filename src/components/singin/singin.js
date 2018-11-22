import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import purple from "@material-ui/core/colors/purple";
import Button from "@material-ui/core/Button";

// todo
//dopasować do innych elementów na stronie
//dorobić post axios

export class singin extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.root} elevation={1} align="center">
          <Icon color="secondary">lock</Icon>
          <Typography variant="headline" component="h3" align="center">
            Logowanie
          </Typography>

          <FormControl className={classes.margin} align="center">
            {/* /Login */}
            <TextField
              required
              id="standard-required"
              label="Login"
              className={{
                size: classes.size,
                root: classes.cssLabel,
                focused: classes.cssFocused
              }}
              margin="normal"
            />
            {/* Hasło */}
            <TextField
              required
              id="standard-password-input"
              label="Hasło"
              className={{
                size: classes.size,
                root: classes.cssLabel,
                focused: classes.cssFocused
              }}
              type="password"
              autoComplete="current-password"
              margin="normal"
            />
            {/* Button */}
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Zaloguj
            </Button>
          </FormControl>
        </Paper>
      </div>
    );
  }
}
singin.propTypes = {
  classes: PropTypes.object.isRequired
};
// styles
const styles = theme => ({
  root: {
    //paper
    ...theme.mixins.gutters(),
    paddingBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    width: "30%"
    // margin: "20%"
  },
  icon: {
    margin: theme.spacing.unit * 2
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing.unit
  },
  cssLabel: {
    "&$cssFocused": {
      color: purple[500]
    }
  },
  cssFocused: {},
  cssUnderline: {
    "&:after": {
      borderBottomColor: purple[500]
    }
  },
  size: {
    width: "80%"
  },
  bootstrapRoot: {
    "label + &": {
      marginTop: theme.spacing.unit * 3
    }
  }
});

export default withStyles(styles)(singin);
