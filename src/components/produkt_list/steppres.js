import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// import Navbar from "../navbar/navbar";
import { Route, Switch } from "react-router-dom";

const styles = theme => ({
  root: {
    width: "90%"
  },
  button: {
    marginRight: theme.spacing.unit
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  connectorActive: {
    "& $line": {
      borderColor: theme.palette.secondary.main
    }
  },
  connectorCompleted: {
    "& $line": {
      borderColor: theme.palette.primary.main
    }
  },
  line: {}
});

function getSteps() {
  return ["Uzupełnienie danych", "Lista ptoduktów", "Podsumowanie"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "Uzupełnienie danych";
    case 1:
      return "Lista ptoduktów";
    case 2:
      return "Podsumowanie";
    default:
      return "Unknown step";
  }
}

class CustomizedStepper extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const { classes, state1 } = this.props;
    const { activeStep } = this.state;
    const steps = getSteps();

    return (
      <div className={classes.root}>
        <Stepper
          activeStep={activeStep}
          connector={
            <StepConnector
              classes={{
                active: classes.connectorActive,
                completed: classes.connectorCompleted,
                line: classes.line
              }}
            />
          }
        >
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                Wszystkie kroku ukończone
              </Typography>
              <Button onClick={this.handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <Switch>
              <div>
                <Typography className={classes.instructions}>
                  {getStepContent(activeStep)}
                </Typography>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={this.handleBack}
                    className={classes.button}
                  >
                    Cofnij
                  </Button>

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Koniec" : "Następny"}
                  </Button>

                  <Route exact path="/Dodawanie_produktu" render={() => {}} />
                </div>
              </div>
            </Switch>
          )}
        </div>
      </div>
    );
  }
}

CustomizedStepper.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(CustomizedStepper);
