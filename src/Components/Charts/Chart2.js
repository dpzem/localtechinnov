import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import Paper from "@material-ui/core/Paper";

let data2 = {
  datasets: [
    {
      label: "Number of Days",
      data: [10, 38, 24, 28],
      backgroundColor: [
        "rgba(255, 78, 132, 0.8)",
        "rgba(54, 162, 246, 0.8)",
        "rgba(255, 206, 0, 0.8)",
        "rgba(128, 0, 120, 0.8)"
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
      data={data2}
      height="200"
      width="400"
      options={{
        responsive: true,
        title: {
          display: true,
          text: "On average, where was my team seated this month?",
          fontFamily: "Calibri",
          fontSize: 25,
          fontColor: "#359"
        },
        legend: {
          display: true,
          labels: {
            fontSize: 12,
            fontFamily: "Calibri"
          }
        },
        rotation: 0,
        animation: {
          animateRotate: true,
          animateScale: true
        }
      }}
    />
  </Paper>
);
