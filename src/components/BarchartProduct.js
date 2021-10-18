import React, { Component } from "react";
import Chart from "react-apexcharts";

class BarChartProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: ["wood tiles", "Wooden Cupboard", "Grey Table"],
        },
        title: {
          text: "Total quantity of product ordered from supplier",
          align: "center",
          floating: true,
        },
        colors: ["#90b083"],
      },
      series: [
        {
          name: "series-1",
          data: [100, 3, 1],
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

export default BarChartProduct;
