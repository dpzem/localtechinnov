import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import Paper from "@material-ui/core/Paper";

let data = {
  datasets: [
    {
      label: "Number of Days",
      data: [16, 10, 23, 13],
      backgroundColor: [
        "rgba(0, 255, 0, 0.5)",
        "rgba(255, 0, 0, 0.5)",
        "rgba(0, 0, 255, 0.5)",
        "rgba(255, 255, 0, 0.5)"
      ],
      borderWidth: 2,
      borderColor: "#777",
      hoverBorderWidth: 3,
      hoverBorderColor: "#000"
    }
  ],
  labels: ["Area 1", "Area 2", "Area 3", "Area 4"]
};

export default ({ styles }) => (
  <Paper style={styles.Paper}>
    <Pie
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: true,
        title: {
          display: true,
          text: "On average, where was my team seated this month?",
          fontFamily: "Calibri",
          fontSize: 25,
          fontColor: "#359"
        },
        legend: {
          display: true
        },
        layout: {
          padding: {
            top: 0,
            left: 0
          }
        }
      }}
    />
  </Paper>
);
