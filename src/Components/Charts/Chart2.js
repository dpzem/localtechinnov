import React from "react";
import { HorizontalBar, Bar, Pie } from "react-chartjs-2";
import Paper from "@material-ui/core/Paper";

let data = {
  datasets: [
    {
      label: "Number of Annual Leave Days",
      data: [58, 12, 10, 13, 11, 8, 9, 17, 13, 15, 18, 32],
      backgroundColor: "rgba(0, 0, 255, 0.5)",
      borderWidth: 2,
      borderColor: "#777",
      hoverBorderWidth: 3,
      hoverBorderColor: "#000"
    }
  ],
  labels: [
    "January '19",
    "December '18",
    "November '18",
    "October '18",
    "September '18",
    "August '18",
    "July '18",
    "June '18",
    "May '18",
    "April '18",
    "March '18",
    "February '18"
  ]
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
                fontSize: 12
              },
              scaleLabel: {
                display: true,
                labelString: "Number of Days",
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
