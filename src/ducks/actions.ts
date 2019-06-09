import ActionType from "./actions.types";
import { IRecommendationData } from "../types";

export const updateStockPredictionData = (data: IRecommendationData) => ({
  type: ActionType.UPDATE_STOCK_RECOMMENDATION_DATA,
  payload: {
    value: data
  }
});
