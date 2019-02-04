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
        <Pie
          data={data2}
          width="100"
          height="33"
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
                fontSize: 16,
                fontFamily: "Calibri"
              }
            },
            rotation: 0,
            animation: {
              animateRotate: true,
              animateScale: true
            }
            /*tooltips: {
              callbacks: {
                label: function(tooltipItem, data2) {
                  var dataset = data2.datasets[tooltipItem.datasetIndex];
                  var meta = dataset._meta[Object.keys(dataset._meta)[0]];
                  var total = meta.total;
                  var currentValue = dataset.data2[tooltipItem.index];
                  var percentage = parseFloat(
                    ((currentValue / total) * 100).toFixed(1)
                  );
                  return currentValue + " (" + percentage + "%)";
                },
                title: function(tooltipItem, data2) {
                  return data2.labels[tooltipItem[0].index];
                }
              }
            }*/
          }}
        />
        <Bar
          data={data}
          width="100"
          height="50"
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
                top: 50,
                left: 0
              }
            }
          }}
        />
      </div>
    );
  }
}

export default DataVis;
