import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import Paper from "@material-ui/core/Paper";

let data = {
  datasets: [
    {
      label: "In The Office",
      data: [78.5, 10, 23, 13, 29],
      backgroundColor: "rgba(0, 255, 0, 0.5)",
      borderWidth: 2,
      borderColor: "#777",
      hoverBorderWidth: 3,
      hoverBorderColor: "#000"
    },
    {
      label: "Working From Home",
      data: [8.3, 10, 23, 13, 29],
      backgroundColor: "rgba(0, 0, 255, 0.5)",
      borderWidth: 2,
      borderColor: "#777",
      hoverBorderWidth: 3,
      hoverBorderColor: "#000"
    },
    {
      label: "Out Of Office",
      data: [13.2, 10, 23, 13, 29],
      backgroundColor: "rgba(255, 0, 0, 0.5)",
      borderWidth: 2,
      borderColor: "#777",
      hoverBorderWidth: 3,
      hoverBorderColor: "#000"
    }
  ],
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
};

export default ({ styles }) => (
  <Paper style={styles.Paper}>
    <Bar
      data={data}
      height="200"
      width="400"
      options={{
        responsive: true,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                min: 0,
                max: 100,
                fontSize: 14,
                callback: function(value) {
                  return value + "%";
                }
              },
              scaleLabel: {
                display: true,
                labelString: "Percentage of Team",
                fontSize: 14
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                fontSize: 20,
                fontFamily: "Calibri",
                fontStyle: "Bold"
              }
            }
          ]
        },
        title: {
          display: true,
          text: "Team Location (Average over Last 30 Days)",
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
