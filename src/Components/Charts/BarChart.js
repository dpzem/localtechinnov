import React, { Component } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Working From Home", "On Site", "In the Office"],
        datasets: [
          {
            label: "Employees",
            data: [16, 5, 43],
            backgroundColor: [
              "rgba(255, 99, 132, 0.7)",
              "rgba(54, 162, 235, 0.7)",
              "rgba(255, 206, 86, 0.7)"
            ],
            borderWidth: 2,
            borderColor: "#777",
            hoverBorderWidth: 3,
            hoverBorderColor: "#000"
          }
        ]
      }
    };
  }

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          width={20}
          height={5}
          options={{
            title: {
              display: true,
              text: "Location of Employees Today",
              fontFamily: "Calibri",
              fontSize: 25
            },
            legend: {
              display: false,
              position: "bottom"
            }
          }}
        />
      </div>
    );
  }
}

export default BarChart;
