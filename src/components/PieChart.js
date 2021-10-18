import React, { Component } from "react";
import Chart from "react-apexcharts";

class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          width: 275,
          type: "pie",
        },
        colors: ["#C48969", "#90b083", "#797b63", "#B1AD9E", "#C1BEAF"],
        title: {
          text: "Percentage of customers in each suburb",
          align: "left",
          floating: false,
        },
        labels: [
          "Boskruin",
          "Ferndale",
          "Northcliff",
          "Randpark Ridge",
          "Houten",
        ],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 275,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
      series: [22, 33, 12, 20, 13],
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
              type="pie"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PieChart;
