import { IRecommendationData, IStockData } from "../types";

export function selectStockData(
  predictionData: IRecommendationData
): Array<IStockData> {
  return predictionData.stockData;
}
