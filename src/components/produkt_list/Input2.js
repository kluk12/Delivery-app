/* eslint-disable react/prefer-stateless-function */

import React, { Fragment } from "react";
import MaskedInput from "react-text-mask";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { Button, Icon } from "@material-ui/core";

const styles = theme => ({
  // container: {
  //   display: "flex",
  //   flexWrap: "wrap"
  // },
  formControl: {
    margin: theme.spacing.unit
  }
});

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
      // thousandSeparator
      // prefix="$"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

class FormattedInputs extends React.Component {
  state = {
    // textmask: "(1  )    -    ",
    numberformat: "0"
  };

  handleChange = event => {
    this.setState({
      numberformat: event.target.value
    });
    // const n = event.target.value;
    // console.log(n);
    // const nn = parseInt(n);
    // console.log(nn);
    // this.setState({
    //   numberformat: nn
    // });
  };
  add = () => {
    this.setState(state => {
      const n = [...state.numberformat];
      console.log(n);
      if (n === 0 || n === "0") return { numberformat: 1 };
      const nn = parseInt(n) + 1;
      console.log(nn);
      return { numberformat: nn };
    });
  };
  minus = () => {
    this.setState(state => {
      const n = [...state.numberformat];
      console.log(n);
      const nn = parseInt(n) - 1;
      if (
        nn === 1 ||
        nn <= 0 ||
        nn === null ||
        nn === NaN ||
        nn === "1" ||
        nn <= "0"
      )
        return { numberformat: 0 };
      else {
        console.log(nn);
        return { numberformat: nn };
      }
    });
  };
  render() {
    const { classes } = this.props;
    const { textmask, numberformat } = this.state;

    return (
      <Fragment>
        {console.log(numberformat)}
        {/* <FormControl className={classes.formControl}>
          <InputLabel htmlFor="formatted-text-mask-input">
            react-text-mask
          </InputLabel>
          <Input
            value={textmask}
            onChange={this.handleChange("textmask")}
            id="formatted-text-mask-input"
            inputComponent={TextMaskCustom}
          />
        </FormControl> */}
        {/* <Button size="small" onClick={this.add}>
          <Icon className={classes.iconHover} color="secondary">
            add_circle
          </Icon>
        </Button> */}
        <TextField
          className={classes.formControl}
          placeholder="Ilość"
          // label="react-number-format"
          value={numberformat}
          onChange={this.handleChange}
          id="formatted-numberformat-input"
          InputProps={{
            inputComponent: NumberFormatCustom
          }}
        />
        {/* <Button size="small" onClick={this.minus}>
          <Icon className={classes.iconHover} color="error">
            remove_circle
          </Icon>
        </Button> */}
      </Fragment>
    );
  }
}

FormattedInputs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FormattedInputs);
