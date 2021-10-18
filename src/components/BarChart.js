import React, { Component } from "react";
import Chart from "react-apexcharts";

class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: "bar",
        },
        xaxis: {
          text: "Month",
          categories: ["June", "July", "August", "September", "October"],
        },
        yxis: {
          labels: {
            show: true,
            text: "Average of Total Cost",
          },
        },
        title: {
          text: "Monthly Average Cost of projects in Rand",
          align: "center",
          floating: false,
        },
        colors: ["#C48969", "#90b083", "#797b63", "#B1AD9E", "#C1BEAF"],
      },
      series: [
        {
          name: "monthly-cost",
          data: [4000, 1000, 6000, 2000, 3000],
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BarChart;
