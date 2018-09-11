import React from "react";
import { AreaChart } from "react-easy-chart";
import moment from "moment";

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          date: "2016-05-01",
          timestamp: 1462041000,
          portfolio_value_for_date: 0,
          portfolio_value_till_date: 0,
          capital_value_for_date: 0,
          capital_value_till_date: 0,
          payout_value_for_date: 0,
          payout_value_till_date: 0,
          gross_realised_pnl_for_date: 800000,
          gross_realised_pnl_till_date: 0,
          gross_unrealised_pnl_for_date: 0,
          net_realised_pnl_till_date: 0,
          gross_unrealised_pnl_till_date: 0,
          tax_for_date: 0,
          tax_till_date: 0,
          brokerage_for_date: 0,
          brokerage_till_date: 0,
          events_list: []
        },
        {
          date: "2016-05-02",
          timestamp: 1462127400,
          portfolio_value_for_date: 0,
          portfolio_value_till_date: 0,
          capital_value_for_date: 0,
          capital_value_till_date: 0,
          payout_value_for_date: 0,
          payout_value_till_date: 0,
          gross_realised_pnl_for_date: 200000,
          gross_realised_pnl_till_date: 0,
          gross_unrealised_pnl_for_date: 0,
          net_realised_pnl_till_date: 0,
          gross_unrealised_pnl_till_date: 0,
          tax_for_date: 0,
          tax_till_date: 0,
          brokerage_for_date: 0,
          brokerage_till_date: 0,
          events_list: []
        },
        {
          date: "2016-05-03",
          timestamp: 1462213800,
          portfolio_value_for_date: 0,
          portfolio_value_till_date: 0,
          capital_value_for_date: 0,
          capital_value_till_date: 0,
          payout_value_for_date: 0,
          payout_value_till_date: 0,
          gross_realised_pnl_for_date: 200000,
          gross_realised_pnl_till_date: 0,
          gross_unrealised_pnl_for_date: 0,
          net_realised_pnl_till_date: 0,
          gross_unrealised_pnl_till_date: 0,
          tax_for_date: 0,
          tax_till_date: 0,
          brokerage_for_date: 0,
          brokerage_till_date: 0,
          events_list: []
        },
        {
          date: "2016-05-04",
          timestamp: 1462300200,
          portfolio_value_for_date: 0,
          portfolio_value_till_date: 0,
          capital_value_for_date: 0,
          capital_value_till_date: 0,
          payout_value_for_date: 0,
          payout_value_till_date: 0,
          gross_realised_pnl_for_date: 900000,
          gross_realised_pnl_till_date: 0,
          gross_unrealised_pnl_for_date: 0,
          net_realised_pnl_till_date: 0,
          gross_unrealised_pnl_till_date: 0,
          tax_for_date: 0,
          tax_till_date: 0,
          brokerage_for_date: 0,
          brokerage_till_date: 0,
          events_list: []
        },
        {
          date: "2016-05-05",
          timestamp: 1462386600,
          portfolio_value_for_date: 0,
          portfolio_value_till_date: 0,
          capital_value_for_date: 0,
          capital_value_till_date: 0,
          payout_value_for_date: 0,
          payout_value_till_date: 0,
          gross_realised_pnl_for_date: 200000,
          gross_realised_pnl_till_date: 0,
          gross_unrealised_pnl_for_date: 0,
          net_realised_pnl_till_date: 0,
          gross_unrealised_pnl_till_date: 0,
          tax_for_date: 0,
          tax_till_date: 0,
          brokerage_for_date: 0,
          brokerage_till_date: 0,
          events_list: []
        },
        {
          date: "2016-05-06",
          timestamp: 1462473000,
          portfolio_value_for_date: 0,
          portfolio_value_till_date: 0,
          capital_value_for_date: 0,
          capital_value_till_date: 0,
          payout_value_for_date: 0,
          payout_value_till_date: 0,
          gross_realised_pnl_for_date: 200000,
          gross_realised_pnl_till_date: 0,
          gross_unrealised_pnl_for_date: 0,
          net_realised_pnl_till_date: 0,
          gross_unrealised_pnl_till_date: 0,
          tax_for_date: 0,
          tax_till_date: 0,
          brokerage_for_date: 0,
          brokerage_till_date: 0,
          events_list: []
        }
      ]
    };
    this.xyValue;
  }

  componentDidMount() {
    const momentDate = moment.utc(1462041000);
    console.log("test");
  }

  render() {
    this.xyValue = this.state.data.map(item => {
      console.log(item.timestamp);
      return {
        x: moment.utc(item.timestamp * 1000).format("DD-MMM-YY"),
        y: item.gross_realised_pnl_for_date
      };
    });
    return (
      <div>
        View your graph here
        <AreaChart
          xType={"time"}
          axes
          interpolate={"cardinal"}
          width={750}
          height={250}
          data={[this.xyValue]}
        />
      </div>
    );
  }
}

export default Wrapper;
