import React, { Component } from "react";
import Chart from "react-apexcharts";

class RatingChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: ["James", "John"],
        },
        title: {
          text: "Rating out of 5 from Client",
          align: "left",
          floating: false,
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        colors: ["#C48969"],
      },
      series: [
        {
          name: "series-1",
          data: [5, 4],
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

export default RatingChart;
