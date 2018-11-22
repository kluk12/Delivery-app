import React from "react";
import PropTypes from "prop-types";
import Portal from "@material-ui/core/Portal";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  alert: {
    padding: theme.spacing.unit,
    margin: `${theme.spacing.unit}px 0`,
    border: "1px solid",
    borderColor: theme.palette.text.primary
  }
});

class SimplePortal extends React.Component {
  state = {
    show: false
  };

  handleClick = () => {
    this.setState(state => ({ show: !state.show }));
  };

  render() {
    const { classes } = this.props;
    const { show } = this.state;
    return (
      <div>
        <Button onClick={this.handleClick}>
          {show ? "Unmount children" : "Mount children"}
        </Button>
        <div className={classes.alert}>
          <Typography>It looks like I will render here.</Typography>
          {show ? (
            <Portal container={this.container}>
              <TextField
                id="datetime-local"
                label="Next appointment"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Portal>
          ) : null}
        </div>
        <div
          className={classes.alert}
          ref={ref => {
            this.container = ref;
          }}
        />
      </div>
    );
  }
}

SimplePortal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimplePortal);
