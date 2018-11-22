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
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

// todo
//dopasować do innych elementów na stronie
//dorobić post axios

class register extends Component {
  state = {
    checkedr: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.root} elevation={1} align="center">
          <Icon color="secondary">lock</Icon>
          <Typography variant="headline" component="h3" align="center">
            Rejstracja
          </Typography>
          <Grid container justify="center">
            <FormControl className={classes.margin} align="center">
              <Grid
                direction="row-reverse"
                justify="center"
                alignItems="center"
                spacing="32"
              >
                {/* /Login */}
                <TextField
                  required
                  id="standard-required"
                  label="Login"
                  className={classes.margin}
                  margin="normal"
                />

                {/* Hasło */}
                <TextField
                  required
                  id="standard-required"
                  label="Imię"
                  className={classes.margin}
                  margin="normal"
                />
              </Grid>

              <Grid
                item
                direction="row-reverse"
                justify="center"
                alignItems="center"
              >
                <TextField
                  required
                  id="standard-password-input"
                  label="Hasło"
                  className={classes.margin}
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                />
                <TextField
                  required
                  id="standard-password-input"
                  label="Powtórz hasło"
                  className={classes.margin}
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                />
              </Grid>
              <Grid
                item
                direction="row-reverse"
                justify="center"
                alignItems="center"
              >
                <TextField
                  required
                  id="standard-required"
                  label="Miasto"
                  className={classes.margin}
                  margin="normal"
                />
                <TextField
                  required
                  id="standard-required"
                  label="Adres"
                  className={classes.margin}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedB}
                      onChange={this.handleChange("checkedr")}
                      value="checkedr"
                      color="primary"
                    />
                  }
                  label="Akceptujesz warunki polityki czegoś tam"
                />
              </Grid>

              <Grid item>
                {/* Button */}

                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Rejstracja
                </Button>
              </Grid>
            </FormControl>
          </Grid>
        </Paper>
      </div>
    );
  }
}
register.propTypes = {
  classes: PropTypes.object.isRequired
};
// styles
const styles = theme => ({
  root: {
    //paper
    ...theme.mixins.gutters(),
    paddingBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    width: "40%",
    // margin: "20%"
    marginTop: "10%" // do usunieńcia przy produkcji
  },
  icon: {
    margin: theme.spacing.unit * 2
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing.unit,
    marginTop: theme.spacing.unit * 2.5
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

export default withStyles(styles)(register);
