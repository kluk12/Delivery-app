import React, { Fragment } from "react";
import PropTypes from "prop-types";
// import { BrowserRouter, Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Consumer } from "../Context";
import {
  FormControl,
  InputLabel,
  Select,
  Paper,
  Grid
} from "@material-ui/core";
import Navbar from "../navbar/navbar";
import Button from "@material-ui/core/Button";
import Table from "./Table";
import { Link } from "react-router-dom";
import Cart from "./cart";
const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    [theme.breakpoints.down("xs")]: {
      width: "80%",
      margin: `5% 10%`
    },
    [theme.breakpoints.up("sm")]: {
      margin: "2% 5%",
      width: "40%"
    },
    [theme.breakpoints.up("md")]: {
      margin: "3% 5%",
      width: "39%"
    },
    [theme.breakpoints.up("lg")]: { margin: `2% 4.5%`, width: "24%" }
  },
  Paper: {
    // padding: 20,
    // margin: "5% auto",
    // height: "80vh",
    overflowY: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "100%"
      // margin: `auto`
    },
    [theme.breakpoints.up("sm")]: {
      margin: "5% 5%",
      width: "100%"
    },
    // [theme.breakpoints.up("xs")]: {
    //   margin: "20px 5%",
    //   width: "89%"
    // },
    [theme.breakpoints.up("md")]: {
      margin: "20px 5%",
      width: "89%"
    },
    [theme.breakpoints.up("lg")]: { margin: `2% 4.5%`, width: "90%" }
  },
  dense: {
    marginTop: 16
  },
  button: {
    margin: "30px auto",
    display: "block"
  },
  menu: {
    width: 200
  }
});

class Fpage extends React.Component {
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

          handleChange,
          handleChangeSelectmiasto,
          handleChangeSelecttype
        }) => {
          return (
            <Fragment>
              <Navbar Title="Edycja danych" />

              <form className={classes.container} noValidate autoComplete="off">
                <Paper className={classes.Paper}>
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
                    label="Wybierz"
                    className={classes.textField}
                    value={Miasto}
                    onChange={handleChangeSelectmiasto}
                    SelectProps={{
                      MenuProps: {
                        className: classes.menu
                      }
                    }}
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
                  {/* form 2

              */}
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
                    label="Wybierz"
                    className={classes.textField}
                    value={type}
                    onChange={handleChangeSelecttype}
                    SelectProps={{
                      MenuProps: {
                        className: classes.menu
                      }
                    }}
                    // helperText=""
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
                  />
                </Paper>

                <Table />
                <Cart />

                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Link to="/product">
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      Cofnij
                    </Button>
                  </Link>
                </Grid>
              </form>
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}

Fpage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Fpage);
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
];
