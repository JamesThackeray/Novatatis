import React from "react";
import { Grid, Card } from "@mui/material";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import BarChartProduct from "../components/BarchartProduct";
import YearlyAverageTurnAround from "../components/YearlyAverageTurnAround";
import CostIncomeChart from "../components/CostIncomeChart";
import RatingChart from "../components/RatingChart";

class Report extends React.Component {
  render() {
    return (
      <div className="report">
        <Grid
          container
          spacing={{ xs: 1, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={3} md={4} key={1}>
            <Card sx={{ minWidth: 275 }}>
              <BarChart />
            </Card>
          </Grid>
          <Grid item xs={2} sm={3} md={4} key={2}>
            <Card sx={{ minWidth: 275 }}>
              <PieChart />
            </Card>
          </Grid>
          <Grid item xs={2} sm={3} md={4} key={3}>
            <Card sx={{ minWidth: 275 }}>
              <BarChartProduct />
            </Card>
          </Grid>
          <Grid item xs={2} sm={3} md={4} key={4}>
            <Card sx={{ minWidth: 275 }}>
              <YearlyAverageTurnAround />
            </Card>
          </Grid>
          <Grid item xs={2} sm={3} md={4} key={5}>
            <Card sx={{ minWidth: 275 }}>
              <CostIncomeChart />
            </Card>
          </Grid>
          <Grid item xs={2} sm={3} md={4} key={5}>
            <Card sx={{ minWidth: 275 }}>
              <RatingChart />
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Report;
