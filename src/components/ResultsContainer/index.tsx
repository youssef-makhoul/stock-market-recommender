import * as React from "react";
import { connect } from "react-redux";
import * as selectors from "../../ducks/selectors";
import { IAppState, IStockData, ISocialMediaData } from "../../types";
import { StockChart, RecommendationResult, SocialMediaSlide } from "..";

interface IState {}
interface IProps {
  dispatch: Function;
  loaded: boolean;
  stockData: Array<IStockData>;
  recommendation: string;
  socialMediaData: ISocialMediaData | undefined;
}
class ResultsContainer extends React.Component<IProps, IState> {
  render() {
    return (
      <div>
        {this.props.loaded && this.props.socialMediaData ? (
          <>
            <RecommendationResult
              recommendation={this.props.recommendation}
              socialMediaData={this.props.socialMediaData}
            />
            <StockChart stockData={this.props.stockData} />
            <SocialMediaSlide
              stockSymbol={this.props.socialMediaData.stockSymbol}
              socialMediaSource={this.props.socialMediaData.source}
            />
          </>
        ) : null}
      </div>
    );
  }
}
let mapsStateToProps = (state: IAppState) => {
  const recommendationData = state.recommendationData;
  if (recommendationData) {
    const stockData = selectors.selectStockData(recommendationData);
    return {
      loaded: true,
      stockData,
      socialMediaData: recommendationData.socialMediaData,
      recommendation: recommendationData.recommendation
    };
  } else
    return {
      loaded: false,
      stockData: [],
      socialMediaData: undefined,
      recommendation: ""
    };
};
export default connect(mapsStateToProps)(ResultsContainer);
