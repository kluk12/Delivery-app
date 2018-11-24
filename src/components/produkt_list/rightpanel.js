import React, { Component, Fragment } from "react";
import { Consumer } from "../Context";
import red from "@material-ui/core/colors/red";
import { Button, Grid } from "@material-ui/core";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value
          }
        });
      }}
      thousandSeparator
      // prefix="X "
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};
class Rightpanel extends Component {
  state = { ile: 0, err1: false, err2: false };

  render() {
    const { classes, p, i } = this.props;

    return (
      <Consumer>
        {({ state: { rp }, removeProduct, handleile, handleopis }) => {
          // console.log(rp);
          return (
            <Fragment>
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="baseline"
                spacing={0}
              >
                {/* <Input2 /> */}
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  className={classes.border}
                >
                  <p className={classes.p}>{p.label}</p>
                  <TextField
                    label="Ilość"
                    className={classes.input2}
                    placeholder="Ilość"
                    // label="react-number-format"
                    value={rp[i].ile}
                    // numberformat
                    onChange={handleile(i)}
                    id="formatted-numberformat-input"
                    InputProps={{
                      inputComponent: NumberFormatCustom
                    }}
                  />
                  <TextField
                    label="Opis"
                    className={classes.input}
                    value={rp[i].opis}
                    onChange={handleopis(i)}
                    margin="normal"
                    placeholder="Opis"
                  />

                  <Button
                    mini
                    color="secondary"
                    aria-label="Usuń"
                    value={rp[i].active}
                    className={classes.button}
                    onClick={() => {
                      removeProduct(i);
                    }}
                  >
                    Usuń
                  </Button>
                </Grid>
              </Grid>
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}
const styles = theme => ({
  root: {
    // display: "flex",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  icon: {
    margin: theme.spacing.unit * 2
  },
  button: {
    width: "13%",
    "&:hover": {
      color: red[800]
    }
    // margin: theme.spacing.unit
  },
  input: {
    margin: theme.spacing.unit,
    width: "22%"
  },
  input2: {
    margin: theme.spacing.unit,
    width: "22%"
  },
  border: {
    borderwidth: "5px",
    borderbottomstyle: "double"
  },
  p: { display: "inline-block", margin: "5px 5px", width: "15%" },
  iconHover: {
    // margin: theme.spacing.unit * 2,
    "&:hover": {
      color: red[800]
    }
  }
});
export default withStyles(styles)(Rightpanel);
