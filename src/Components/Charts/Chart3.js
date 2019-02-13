import React from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import Paper from "@material-ui/core/Paper";

let data = {
  datasets: [
    {
      label: "Percentage of Team",
      data: [5, 12, 20, 10, 23, 30],
      // backgroundColor: "rgba(0, 255, 0, 0.5)",
      borderWidth: 2,
      borderColor: "#777",
      hoverBorderWidth: 3,
      hoverBorderColor: "#000"
    }
  ],
  labels: [
    "Before 8am",
    "8:00 - 8:30 am",
    "8:30 - 9:00 am",
    "9:00 - 9:30 am",
    "9:30 - 10:00 am",
    "After 10:00 am"
  ]
};

export default ({ styles }) => (
  <Paper style={styles.Paper}>
    <Line
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
                fontSize: 12,
                fontFamily: "Calibri",
                fontStyle: "Bold"
              },
              scaleLabel: {
                display: true,
                labelString: "Time Logged",
                fontStyle: "Bold",
                fontFamily: "Calibri",
                fontSize: 16
              }
            }
          ]
        },
        title: {
          display: true,
          text: "On average, what time does my team log their location?",
          fontFamily: "Calibri",
          fontSize: 23,
          fontColor: "#359",
          padding: 20
        },
        legend: {
          display: false
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
