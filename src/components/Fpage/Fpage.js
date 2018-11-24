import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { BrowserRouter, Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Consumer } from "../Context";
import { FormControl, InputLabel, Select, Paper } from "@material-ui/core";
import Navbar from "../navbar/navbar";
import { Button } from "@material-ui/core/Button";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  button: {
    margin: theme.spacing.unit
  },
  menu: {
    width: 200
  }
});

const currencies = [
  {
    value: "USD",
    label: "$"
  },
  {
    value: "EUR",
    label: "€"
  },
  {
    value: "BTC",
    label: "฿"
  },
  {
    value: "JPY",
    label: "¥"
  }
];

class OutlinedTextFields extends React.Component {
  state = {
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Consumer>
        {({
          state: {
            Imie,
            Nazwisko,
            Pseudonim,
            Miasto,
            Nrmieszkania,
            Email,

            type,
            Tytuł,
            Radios,
            Opis,
            DateStart,
            DateEnd
          },
          handleClick,
          handleChange,
          handleChangeSelectmiasto,
          handleChangeSelecttype,
          handleChangeRadios,
          handleChangeDateEnd,
          handleChangeDateStart
        }) => {
          return (
            <Fragment>
              <Navbar Title="Edycja danych" />
              {/* {console.log(
                Imie,
                Nazwisko,
                Pseudonim,
                Miasto,
                Nrmieszkania,
                Email,

                type,
                Tytuł,
                Radios,
                Opis,
                DateStart,
                DateEnd
              )} */}
              <form className={classes.container} noValidate autoComplete="off">
                <Paper>
                  <TextField
                    id="outlined-name"
                    className={classes.textField}
                    label="Imie"
                    value={Imie}
                    onChange={handleChange("Imie")}
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-uncontrolled"
                    label="Nazwisko"
                    value={Nazwisko}
                    onChange={handleChange("Nazwisko")}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-name"
                    className={classes.textField}
                    label="Pseudonim"
                    value={Pseudonim}
                    onChange={handleChange("Pseudonim")}
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    className={classes.textField}
                    value={Miasto}
                    onChange={handleChangeSelectmiasto}
                    SelectProps={{
                      MenuProps: {
                        className: classes.menu
                      }
                    }}
                    // helperText="Please select your currency"
                    margin="normal"
                    variant="outlined"
                  >
                    {miasta.map(m => {
                      return (
                        <MenuItem key={m.id} value={m.name}>
                          {m.name}
                        </MenuItem>
                      );
                    })}
                  </TextField>
                  <TextField
                    id="outlined-name"
                    className={classes.textField}
                    label="Adres"
                    value={Nrmieszkania}
                    onChange={handleChange("Nrmieszkania")}
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-name"
                    className={classes.textField}
                    label="Email"
                    value={Email}
                    onChange={handleChange("Email")}
                    margin="normal"
                    variant="outlined"
                  />{" "}
                </Paper>
                {/* form 2

              */}
                <Paper>
                  <TextField
                    id="outlined-name"
                    className={classes.textField}
                    label="Tytuł"
                    value={Tytuł}
                    onChange={handleChange("Tytuł")}
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    className={classes.textField}
                    value={type}
                    onChange={handleChangeSelecttype}
                    SelectProps={{
                      MenuProps: {
                        className: classes.menu
                      }
                    }}
                    // helperText="Please select your currency"
                    margin="normal"
                    variant="outlined"
                  >
                    {typee.map(t => {
                      return (
                        <MenuItem key={t.id} value={t.name}>
                          {t.name}
                        </MenuItem>
                      );
                    })}
                  </TextField>
                  <TextField
                    id="outlined-name"
                    className={classes.textField}
                    label="Opis"
                    value={Opis}
                    onChange={handleChange("Opis")}
                    margin="normal"
                    variant="outlined"
                  />{" "}
                </Paper>
                <Link to="/product">
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                  >
                    Cofnij
                  </Button>
                </Link>
              </form>
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OutlinedTextFields);
const miasta = [
  {
    id: 0,
    name: "Brak"
  },
  {
    id: 1,
    name: "Warszawa"
  },
  {
    id: 2,
    name: "Kraków"
  },

  {
    id: 3,
    name: "Łódź"
  },
  {
    id: 4,
    name: "Poznań"
  },
  {
    id: 5,
    name: "Gdańsk"
  },
  {
    id: 6,
    name: "Szczecin"
  },
  {
    id: 7,
    name: "Bydgoszcz"
  },
  {
    id: 8,
    name: "Lublin"
  },
  {
    id: 9,
    name: "Białystok"
  }
];
const typee = [
  {
    id: 0,
    name: "Brak"
  },
  {
    id: 1,
    name: "Dostawa"
  },

  {
    id: 2,
    name: "Transport"
  },
  {
    id: 3,
    name: "Zakupy"
  }
  //   {
  //     id: 4,
  //     name: "Gdańsk"
  //   },
];
