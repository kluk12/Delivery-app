import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Consumer } from "../Context";
import { Typography } from "@material-ui/core";

const styles = theme => ({
  root: {
    width: "100%",
    // marginTop: `10% auto`,
    overflowX: "auto",
    [theme.breakpoints.down("xs")]: {
      margin: `auto`
    },
    [theme.breakpoints.up("sm")]: {
      margin: "2% 5%"
    },
    [theme.breakpoints.up("md")]: {
      margin: `2% 4.5%`
    },
    [theme.breakpoints.up("lg")]: { margin: `2% 4.5%` }
  },
  typogrf: { textAlign: "center", marginTop: theme.spacing.unit * 2 },
  table: {}
});

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Consumer>
      {({ state: { rp } }) => {
        return (
          <Paper className={classes.root}>
            <Typography variant="display1" className={classes.typogrf}>
              Produkty
            </Typography>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell numeric>Product</TableCell>
                  <TableCell numeric>ilość</TableCell>
                  <TableCell numeric>Opis</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rp.map(row => {
                  return (
                    //   { key: 0, label: "", ile: 0, opis: "", active: true }
                    <TableRow key={row.key}>
                      <TableCell component="th" hover="true" scope="row">
                        {row.label}
                      </TableCell>
                      <TableCell numeric>{row.ile}</TableCell>
                      <TableCell numeric>{row.opis}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        );
      }}
    </Consumer>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);
