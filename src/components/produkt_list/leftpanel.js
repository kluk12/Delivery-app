import React, { Component } from "react";
import { Paper } from "@material-ui/core";

class leftpanel extends Component {
  state = { style: this.props.style };
  render() {
    const styles = this.props.style;
    return (
      <div>
        <Paper className={styles.Paper}>dsa</Paper>
      </div>
    );
  }
}

export default leftpanel;
