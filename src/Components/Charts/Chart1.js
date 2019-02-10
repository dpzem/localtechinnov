import React from 'react'
import { Bar, Pie } from "react-chartjs-2";
import Paper from '@material-ui/core/Paper';


let data = {
  datasets: [
    {
      label: "Number of Days",
      data: [16, 10, 23, 13, 29],
      backgroundColor: [
        "rgba(255, 78, 132, 0.8)",
        "rgba(54, 162, 246, 0.8)",
        "rgba(255, 206, 0, 0.8)",
        "rgba(128, 0, 120, 0.8)",
        "rgba(0, 128, 0, 0.8)"
      ],
      borderWidth: 2,
      borderColor: "#777",
      hoverBorderWidth: 3,
      hoverBorderColor: "#000"
    }
  ],
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
};

export default ( {styles }) =>
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
                max: 50,
                fontSize: 14
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
          text: "How many days did my team work from home this month?",
          fontFamily: "Calibri",
          fontSize: 25,
          fontColor: "#359"
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