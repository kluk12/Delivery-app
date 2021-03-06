import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Consumer } from "./../Context";
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
});

class ScrollableTabsButtonAuto extends React.Component {
  state = {
    // value: 0
  };

  // handleChange = (event, value) => {
  //   this.setState({ value });
  // };

  render() {
    const { classes, Cat } = this.props;

    return (
      <Consumer>
        {({ state: { value }, handleChangetabs }) => {
          return (
            <div className={classes.root}>
              <AppBar position="static" color="default">
                <Tabs
                  value={value}
                  onChange={handleChangetabs}
                  indicatorColor="primary"
                  textColor="primary"
                  scrollable
                  // scrollButtons="auto"
                  // centered
                >
                  {Cat.map(item => {
                    return <Tab key={item} label={item} />;
                  })}
                </Tabs>
              </AppBar>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScrollableTabsButtonAuto);
