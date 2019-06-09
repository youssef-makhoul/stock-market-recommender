import { IStockData } from "./stockData";
import { ISocialMediaData } from "./socialMediaData";

export interface IPredictionData {
  stockData: Array<IStockData>;
  socialMediaData: ISocialMediaData;
  prediction: string;
}
