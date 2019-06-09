import { IStockData } from "./stockData";
import { ISocialMediaData } from "./socialMediaData";

export interface IRecommendationData {
  stockData: Array<IStockData>;
  socialMediaData: ISocialMediaData;
  recommendation: string;
}
