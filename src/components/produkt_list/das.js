import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";

import { categoria, lista, products } from "./../data/stone";

// dziłający przykład czed listy

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`
  }
});

function generate(element, pro) {
  return pro.map(({ id }) =>
    React.cloneElement(element, {
      key: id
    })
  );
}
const gene = ({ id, nazwa, opis }) => {
  return (
    <ListItem key={id}>
      <ListItemIcon>
        <FolderIcon />
      </ListItemIcon>
      <ListItemText primary={nazwa} secondary={opis ? opis : null} />
    </ListItem>
  );
};
// const setproduct = pro => {
//   this.setState({ p: pro });
// };

class InteractiveList extends React.Component {
  state = {
    dense: false,
    secondary: false,
    p: null
  };
  // componentDidMount = () => {
  //   setproduct(products);
  // };

  render() {
    const { classes, Products, Lista, Categoria } = this.props;

    const { dense, secondary } = this.state;
    //console.log(Products, Lista, Categoria);
    return (
      <div className={classes.root}>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={dense}
                onChange={event =>
                  this.setState({ dense: event.target.checked })
                }
                value="dense"
              />
            }
            label="Enable dense"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={secondary}
                onChange={event =>
                  this.setState({ secondary: event.target.checked })
                }
                value="secondary"
              />
            }
            label="Enable secondary text"
          />
        </FormGroup>
        <Grid container spacing={16}>
          <Grid item xs={12} md={6}>
            <Typography variant="title" className={classes.title}>
              Icon with text
            </Typography>
            <div className={classes.demo}>
              <List dense={dense}>
                {Products.map(({ id, nazwa, opis }) => {
                  return (
                    <ListItem key={id}>
                      <ListItemIcon>
                        <FolderIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={nazwa}
                        secondary={opis ? opis : null}
                      />
                    </ListItem>
                  );
                })}
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

InteractiveList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InteractiveList);



//przed łączenaim
import Navbar from "../navbar/navbar";
import React, { Component, Fragment } from "react";
import { Grid, Paper, List, ListItemText } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Footer from "./footer";
// import Leftpanel from "./leftpanel";
// import Rightpanel from "./rightpanel";
import { categoria, lista, products } from "./../data/stone";
import Typography from "@material-ui/core/Typography";

import ListItem from "@material-ui/core/ListItem";

const styles = {
  Paper: { padding: 20, margin: 10 }
};
class plist extends Component {
  state = {
    categoria: categoria,
    product: products,
    lista: lista,
    dense: false,
    secondary: true
  };
  generate = element => {
    return this.state.product.map(({ nazwa, opis }) =>
      React.cloneElement(element, {
        key: nazwa,
        value: opis
        // primary: { nazwa },
        // secondary: { opis }
      })
    );
  };
  render() {
    const { classes } = this.props;
    const { categoria, products, dense, secondary } = this.state; //lista
    console.log(this.state);
    return (
      <div>
        <Navbar />
        <Grid container>
          <Grid item sm>
            <Paper className={classes.Paper}>
              <List>
                {this.state.product.map(({ categoria, opis, nazwa, id }) => {
                  <Fragment>
                    <ListItem key={id}>
                      {console.log(products, categoria, opis)}
                      <ListItemText primary={"3535"} secondary={"3535322"} />
                    </ListItem>
                  </Fragment>;
                })}
              </List>
            </Paper>
          </Grid>
          <Grid item sm>
            <Paper className={classes.Paper}>dsa</Paper>
          </Grid>
          <Grid item xs={12}>
            {/* <Footer
              Lista={() => {
                this.lista;
              }}
            /> */}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(plist);
