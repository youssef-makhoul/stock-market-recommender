import { IPredictionData, IStockData } from "../types";

export function selectStockData(
  predictionData: IPredictionData
): Array<IStockData> {
  return predictionData.stockData;
}
