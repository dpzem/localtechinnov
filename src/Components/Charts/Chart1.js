import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import Paper from "@material-ui/core/Paper";

let data = {
  datasets: [
    {
      label: "In The Office",
      data: [78.5, 68.3, 72.4, 64.7, 48.2],
      backgroundColor: "rgba(0, 255, 0, 0.5)",
      borderWidth: 2,
      borderColor: "#777",
      hoverBorderWidth: 3,
      hoverBorderColor: "#000"
    },
    {
      label: "Working From Home",
      data: [8.3, 9.2, 12.3, 15.6, 30.2],
      backgroundColor: "rgba(0, 0, 255, 0.5)",
      borderWidth: 2,
      borderColor: "#777",
      hoverBorderWidth: 3,
      hoverBorderColor: "#000"
    },
    {
      label: "Out Of Office",
      data: [13.2, 22.5, 15.3, 19.7, 21.6],
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
      options={{
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                min: 0,
                fontStyle: "Bold",
                fontFamily: "Calibri",
                fontSize: 12,
                callback: function(value) {
                  return value + "%";
                }
              },
              scaleLabel: {
                display: true,
                labelString: "Percentage of Team",
                fontStyle: "Bold",
                fontFamily: "Calibri",
                fontSize: 16
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                fontSize: 16,
                fontFamily: "Calibri",
                fontStyle: "Bold"
              }
            }
          ]
        },
        title: {
          display: true,
          text: "On average, where does my team work from?",
          fontFamily: "Calibri",
          fontSize: 23,
          fontColor: "#359",
          padding: 10
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
