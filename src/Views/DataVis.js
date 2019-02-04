import React, { Component } from "react";

import { Bar, Pie, Line, Doughnut } from "react-chartjs-2";

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

class DataVis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: false
    };
  }

  toggleData() {
    this.setState({
      data: true
    });
    console.log(this.state.data);
  }

  render() {
    return (
      <div>
        <h1> DataVis </h1>
        <Bar
          data={data}
          width="100"
          height="33"
          options={{
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 50
                  }
                }
              ]
            },
            title: {
              display: true,
              text: "Total WFH Days (Last 30 Days)",
              fontFamily: "Calibri",
              fontSize: 25,
              fontColor: "#359"
            },
            legend: {
              display: false
            }
          }}
        />
      </div>
    );
  }
}

export default DataVis;
