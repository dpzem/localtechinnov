import React from "react";
import { HorizontalBar, Bar } from "react-chartjs-2";
import Paper from "@material-ui/core/Paper";

let data = {
  datasets: [
    {
      label: "Percentage of Working Days",
      data: [78.5, 68.3, 72.4, 64.7, 48.2],
      backgroundColor: "rgba(0, 0, 255, 0.5)",
      borderWidth: 2,
      borderColor: "#777",
      hoverBorderWidth: 3,
      hoverBorderColor: "#000"
    }
  ],
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
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
                fontStyle: "Bold",
                fontFamily: "Calibri",
                fontSize: 12,
                callback: function(value) {
                  return value + "%";
                }
              },
              scaleLabel: {
                display: true,
                labelString: "Percentage of Working Days",
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
          text:
            "How many days of Annual Leave has my team taken in the past year?",
          fontFamily: "Calibri",
          fontSize: 20,
          fontColor: "#359",
          padding: 10
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
