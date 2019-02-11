import React from "react";
import Grid from "@material-ui/core/Grid";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import Chart3 from "./Chart3";
import Chart4 from "./Chart4";

const styles = {
  Paper: {
    padding: 15,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5
  }
};

export default props => (
  <Grid container>
    <Grid item sm>
      <Chart1 styles={styles} />
      <Chart2 styles={styles} />
    </Grid>
    <Grid item sm>
      <Chart3 styles={styles} />
      <Chart4 styles={styles} />
    </Grid>
  </Grid>
);
