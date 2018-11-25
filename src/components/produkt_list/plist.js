import Navbar from "../navbar/navbar";
import React, { Component } from "react";
import { Grid, Paper, List, ListItemText } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
// import Footer from "./footer";
import { categoria, products } from "./../data/stone";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
// import _ from "lodash";
import { Consumer } from "./../Context";
import Rightpanel from "./rightpanel";
import { Link } from "react-router-dom";
const styles = theme => ({
  Paper: {
    padding: 20,

    overflowY: "auto",
    margin: "10px auto"
    // height: "80vh"
  },
  Paper2: {
    // padding: "3%",
    paddingLeft: "3%",
    margin: 10,
    height: "100vh",
    overflowY: "auto",
    display: Grid
  },
  root: {
    // flexGrow: 1,
    // maxWidth: 752
  },
  chip: {
    margin: theme.spacing.unit * 2
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`
  },
  button: {
    margin: theme.spacing.unit
  },
  button2: {
    margin: "20px 46%"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  textFieldform: {
    margin: theme.spacing.unit,
    width: 100
  }
});
class plist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dense: false,
      secondary: true
      // // chipData: [],
      // tabs: null,
      // value: 0,
      // name: null,
      // caltegory: null
    };
  }

  handlecheckm = event => {
    this.setState({ dense: event.target.checked });
  };
  handlechecko = event => {
    this.setState({ secondary: event.target.checked });
  };

  render() {
    const { classes } = this.props;

    const { dense, secondary } = this.state;

    return (
      <Consumer>
        {({
          state: { rp },

          handleChangetabs,
          handleDelete,
          handleAdd,
          handleChangeTextform,
          handleChangeSelect,
          addProdukt,
          handlecheckm,
          handlechecko
        }) => {
          return (
            <div>
              <Navbar />
              <Grid container>
                <Grid item xs={12} sm={6} md={6}>
                  {/* left panel */}
                  <Paper className={classes.Paper}>
                    <div className={classes.root}>
                      <FormGroup row>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={dense}
                              onChange={this.handlecheckm}
                              value="dense"
                            />
                          }
                          label={dense ? "Większe" : "Mniejsze "}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={secondary}
                              onChange={this.handlechecko}
                              value="secondary"
                            />
                          }
                          label={secondary ? "Brak opisu" : "Opis"}
                        />
                        {/* formularz Dodawania produktów */}
                        {/* {this.formAddToList(Categoria, classes)} */}
                        {/* <FormGroup row>
                    categoria
                    <FormControl className={classes.formControl}>
                      <InputLabel shrink htmlFor="age-label-placeholder" />
                      <Select
                        value={this.state.age}
                        onChange={this.handleChangeSelect}
                        input={
                          <Input name="caltegory" id="age-label-placeholder" />
                        }
                        displayEmpty
                        name="caltegory"
                        className={classes.selectEmpty}
                      >
                        {Categoria.map(v => {
                          return (
                            <MenuItem key={v} value={v ? v : null}>
                              <em>{v}</em>
                            </MenuItem>
                          );
                        })}
                      </Select>
                      <FormHelperText>Wybież kategorie produktu</FormHelperText>
                    </FormControl>

                    <TextField
                      id="standard-name"
                      label="Produkt"
                      className={classes.textFieldform}
                      value={this.state.name}
                      onChange={this.handleChangeTextform("name")}
                      margin="normal"
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      size="small"
                    >
                      Dodaj
                    </Button>
                  </FormGroup> */}
                      </FormGroup>

                      <Grid container spacing={16}>
                        <Grid item xs={12} sm={10} md={10}>
                          <Typography variant="title" className={classes.title}>
                            Producty
                          </Typography>
                          <div className={classes.demo}>
                            <List dense={dense}>
                              {products.map(({ id, nazwa, opis }) => {
                                return (
                                  <ListItem key={id}>
                                    <ListItemIcon>
                                      <FolderIcon />
                                      {/* ikona produktu /kategori */}
                                    </ListItemIcon>
                                    <ListItemText
                                      primary={nazwa}
                                      secondary={
                                        secondary ? (opis ? opis : null) : null
                                      }
                                    />
                                    {/* dodać add do dodawania */}
                                    <Tooltip title="Add">
                                      <Button
                                        variant="fab"
                                        mini
                                        color="secondary"
                                        aria-label="Add"
                                        className={classes.button}
                                        onClick={() => {
                                          addProdukt(nazwa, id);
                                        }}
                                      >
                                        <AddIcon />
                                      </Button>
                                    </Tooltip>
                                  </ListItem>
                                );
                              })}
                            </List>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </Paper>
                </Grid>
                <Grid item sm>
                  {/* right panel */}
                  <Paper className={classes.Paper2}>
                    {rp.map((props, index) => {
                      if (props.active === true)
                        return (
                          <Rightpanel key={props.key} p={props} i={index} />
                        );
                    })}
                  </Paper>
                </Grid>
                <Grid item xs={12} ms={12} md={12} lg={12}>
                  {/* <Footer Cat={categoria} onselect /> */}{" "}
                  <Link to="/Final_form">
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button2}
                    >
                      Dalej
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default withStyles(styles)(plist);
