import React, { Component } from "react";
import Navbar from "../navbar/navbar";
import {
  Paper,
  MenuItem,
  Typography,
  RadioGroup,
  Radio,
  FormLabel,
  Button
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { Link } from "react-router-dom";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Portal from "@material-ui/core/Portal";
import { Consumer } from "./../Context";

const styles = theme => ({
  root: {
    // flexGrow: 1
  },
  // aa: { width: "500" },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "80%"
  },
  textFielddata: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "80%",
    textAlign: "center"
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  },
  paper: {
    padding: theme.spacing.unit,
    margin: `${theme.spacing.unit * 3}px auto `,

    textAlign: "center",
    color: theme.palette.text.secondary
  },
  paper2: {
    padding: theme.spacing.unit,
    margin: `${theme.spacing.unit * 3}px auto `,
    width: "66.66667%",
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  formControl: {
    margin: theme.spacing.unit,
    width: "80%"
  },
  formOpis: {
    paddingBottom: theme.spacing.unit * 4,
    width: "80%"
  },
  formTitle: {
    // padding: theme.spacing.unit,
    width: "80%"
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  typogrf: { textAlign: "center", marginTop: theme.spacing.unit * 2 },
  button: {
    margin: "30px auto"
  },

  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});

class indexform extends Component {
  // state = {
  //   show: true,
  //   datenow: "",

  //   Imie: "",
  //   Nazwisko: "",
  //   Pseudonim: "",
  //   Miasto: miasta[0],
  //   Nrmieszkania: "",
  //   Email: "",
  //   Miasto: "",
  //   type: type[0],
  //   Tytuł: "",
  //   Radios: "",
  //   Opis: "",
  //   DateStart: "",
  //   DateEnd: ""
  // };
  // componentDidMount = () => {
  //   this.Date();
  // };

  // Date = () => {
  //   const date = new Date();
  //   this.setState({ datenow: date });
  // };

  // handleClick = () => {
  //   this.setState(state => ({ show: !state.show }));
  // };

  // handleChange = name => event => {
  //   this.setState({
  //     [name]: event.target.value
  //   });
  // };
  // handleChangeSelect = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };
  // handleChangeRadios = event => {
  //   this.setState({ Radios: event.target.value });
  // };
  // handleChangeDateEnd = event => {
  //   console.log(event);
  //   this.setState({ DateStart: event.target.value });
  // };
  // handleChangeDateStart = event => {
  //   console.log(event);
  //   this.setState({ DateEnd: event.target.value });
  // };
  render() {
    const { classes } = this.props;

    return (
      <Consumer>
        {({
          state: {
            Imie,
            state,
            Nazwisko,
            Pseudonim,

            Nrmieszkania,
            Email,
            Miasto,
            type,
            Tytuł,
            Radios,
            Opis,
            DateStart,
            DateEnd,
            show
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
            <div>
              {/* {console.log(
                {
                  Imie,
                  Nazwisko,
                  Pseudonim,

                  Nrmieszkania,
                  Email,
                  Miasto,
                  type,
                  Tytuł,
                  Radios,
                  Opis,
                  DateStart,
                  DateEnd,
                  show
                },

                handleClick,
                handleChange,
                handleChangeSelect,
                handleChangeRadios,
                handleChangeDateEnd,
                handleChangeDateStart
              )} */}
              <Navbar Title="Formularz zlecenia" />
              {/* 1 form */}
              <Grid container>
                <Grid item xs={2} />
                <Grid item xs={8}>
                  <Paper className={classes.paper}>
                    <Grid item xs={12} container spacing={24}>
                      <Grid item xs={12}>
                        <Typography
                          className={classes.typogrf}
                          variant="display1"
                        >
                          Dane Kontaktowe
                        </Typography>
                      </Grid>

                      <Grid item xs={6} md={4}>
                        <TextField
                          id="standard-name"
                          label="Imie"
                          className={classes.textField}
                          value={Imie}
                          onChange={handleChange("Imie")}
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={6} md={4}>
                        <TextField
                          id="standard-name"
                          label="Nazwisko"
                          className={classes.textField}
                          value={Nazwisko}
                          onChange={handleChange("Nazwisko")}
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={6} md={4}>
                        <TextField
                          id="standard-name"
                          label="Pseudonim"
                          className={classes.textField}
                          value={Pseudonim}
                          onChange={handleChange("Pseudonim")}
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={6} md={4}>
                        <FormControl className={classes.formControl}>
                          <InputLabel htmlFor="simple">Age</InputLabel>
                          <Select
                            value={Miasto}
                            onChange={handleChangeSelectmiasto}
                            inputProps={{
                              name: "Miasto",
                              id: "simple"
                            }}
                          >
                            {miasta.map(m => {
                              return (
                                <MenuItem key={m.id} value={m.name}>
                                  {m.name}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={6} md={4}>
                        <TextField
                          id="standard-name"
                          label="Adres"
                          className={classes.textField}
                          value={Nrmieszkania}
                          onChange={handleChange("Nrmieszkania")}
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={6} md={4}>
                        <TextField
                          id="standard-name"
                          label="Email"
                          className={classes.textField}
                          value={Email}
                          onChange={handleChange("Email")}
                          margin="normal"
                        />
                      </Grid>
                    </Grid>
                    <Grid item xs={12} container spacing={24} />
                  </Paper>
                </Grid>

                <Grid item xs={2} />
              </Grid>
              {/* 2 form */}
              <Grid container direction="row" className={classes.aa}>
                <Paper className={classes.paper2}>
                  <Grid item xs={12} md={12}>
                    <Typography className={classes.typogrf} variant="display1">
                      Dane Zlecenia
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Grid item xs={12} md={12}>
                      <TextField
                        id="standard-name"
                        className={classes.formTitle}
                        label="Tytuł"
                        value={Tytuł}
                        onChange={handleChange("Tytuł")}
                        margin="normal"
                      />
                    </Grid>
                    <br />
                    <Grid item xs={12} md={12}>
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="typ">Typ </InputLabel>
                        <Select
                          value={type}
                          onChange={handleChangeSelecttype}
                          input={<Input name="type" id="typ" />}
                        >
                          {typee.map(t => {
                            return (
                              <MenuItem key={t.id} value={t.name}>
                                {t.name}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                  {/* Radios */}
                  <Grid item xs={12} md={12}>
                    <FormControl
                      component="fieldset"
                      className={classes.formControl}
                    >
                      <FormLabel component="legend">Czas trwania</FormLabel>
                      <RadioGroup
                        aria-label="Gender"
                        name="gender1"
                        className={classes.group}
                        value={Radios}
                        onChange={handleChangeRadios}
                      >
                        <FormControlLabel
                          value="Określony czas"
                          control={<Radio />}
                          label="Określony czas"
                        />
                        <FormControlLabel
                          value="Czas nieokreślony"
                          control={<Radio />}
                          label="Czas nieokreślony"
                        />
                        <FormControlLabel
                          value="Do kiedy"
                          control={<Radio />}
                          label="Do kiedy"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    {Radios !== "" ? (
                      Radios === "Do kiedy" ? (
                        <Portal container={this.container}>
                          <TextField
                            id="datetime-local"
                            label="Data wygaśnieńcia"
                            type="datetime-local"
                            // defaultValue={datenow}
                            value={DateEnd}
                            onChange={handleChangeDateEnd}
                            className={classes.textFielddata}
                            InputLabelProps={{
                              shrink: true
                            }}
                          />
                          {/* {console.log(this.state)} */}
                        </Portal>
                      ) : Radios === "Określony czas" ? (
                        <Portal container={this.containers}>
                          <TextField
                            id="datetime-local"
                            label="Data publikacji"
                            type="datetime-local"
                            // defaultValue={datenow}
                            value={DateStart}
                            onChange={handleChangeDateStart}
                            className={classes.textFielddata}
                            InputLabelProps={{
                              shrink: true
                            }}
                            margin="normal"
                          />
                          <TextField
                            id="datetime-local"
                            label="Data zamknięcia"
                            type="datetime-local"
                            value={DateEnd}
                            onChange={this.handleChangeDateEnd}
                            // defaultValue={datenow}
                            className={classes.textFielddata}
                            InputLabelProps={{
                              shrink: true
                            }}
                            margin="normal"
                          />
                          {console.log(this.state)}
                        </Portal>
                      ) : null
                    ) : null}

                    <div
                      className={classes.alert}
                      ref={ref => {
                        this.container = ref;
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <div
                      className={classes.alert}
                      ref={ref => {
                        this.containers = ref;
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <TextField
                      id="standard-multiline-flexible"
                      multiline
                      rows="2"
                      label="Opis"
                      value={Opis}
                      onChange={handleChange("Opis")}
                      className={classes.formOpis}
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} md={4} container spacing={24} />
                </Paper>
                <br />
                {/* {console.log(this.state)} */}
                <Grid item xs={12} md={4} />
              </Grid>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  <Link to="/product">
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      Dalej
                    </Button>
                  </Link>
                </Grid>
              </Grid>

              {/* <Grid item xs={2} />
                <Grid item xs={8}>
                  <Paper className={classes.paper}>
                    <Steppres state1={this.state} />
                  </Paper>
                </Grid> */}
              {/* {console.log(this.state)} */}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
indexform.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(indexform);
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
