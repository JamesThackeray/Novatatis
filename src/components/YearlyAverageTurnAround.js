import React, { Component } from "react";
import Chart from "react-apexcharts";

class YearlyAverageTurnAround extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [2021],
        },
        title: {
          text: "Yearly Turn around on projects in Days",
          align: "center",
          floating: true,
        },
        colors: ["#797b63"],
      },

      series: [
        {
          name: "series-1",
          data: [20.67],
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

export default YearlyAverageTurnAround;
