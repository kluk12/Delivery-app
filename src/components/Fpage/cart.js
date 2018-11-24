import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Consumer } from "../Context";

const styles = {
  card: {
    minWidth: 300,
    overflowX: "auto",
    margin: "5% auto"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  butt: { float: "right" }
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <Consumer>
      {({ state: { Pseudonim, Miasto, type, Tytuł, Opis } }) => {
        return (
          <Card className={classes.card}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {Miasto}
              </Typography>
              <Typography variant="display1" component="h2">
                {Tytuł}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {type}
              </Typography>
              <Typography component="p">{Opis}</Typography>
            </CardContent>
            <CardActions>
              <Button className={classes.butt} size="small">
                Zarezerwyj
              </Button>
            </CardActions>
          </Card>
        );
      }}
    </Consumer>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
