import * as React from "react";
import { connect } from "react-redux";
import * as selectors from "../../ducks/selectors";
import { IAppState, IStockData } from "../../types";
import { StockChart } from "..";

interface IState {}
interface IProps {
  dispatch: Function;
  loaded: boolean;
  stockData: Array<IStockData>;
}
class ResultsForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <StockChart stockData={this.props.stockData} />
      </div>
    );
  }
}
let mapsStateToProps = (state: IAppState) => {
  const predictionData = state.predictionData;
  if (predictionData) {
    const stockData = selectors.selectStockData(predictionData);
    return { loaded: true, stockData };
  } else
    return {
      loaded: false,
      stockData: []
    };
};
export default connect(mapsStateToProps)(ResultsForm);
