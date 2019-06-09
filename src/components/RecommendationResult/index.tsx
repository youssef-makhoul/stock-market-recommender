import * as React from "react";
import { ISocialMediaData } from "../../types";

interface IProps {
  recommendation: string;
  socialMediaData: ISocialMediaData;
}
const RecommendationResult: React.FC<IProps> = props => {
  const renderSocialMediaData = () => {
    return `Data Collected from 
    ${props.socialMediaData.source} 
    {Total Posts Mentioned: 
        ${props.socialMediaData.stockSymbol} 
    (Negative:
        ${props.socialMediaData.negativePostsCount})
    (Positive:${props.socialMediaData.positivePostsCount})
    }`;
  };
  return (
    <div>
      <span>I Reccomend that you {props.recommendation}</span>
      <br />
      <span>based on {renderSocialMediaData()}</span>
    </div>
  );
};

export default RecommendationResult;
