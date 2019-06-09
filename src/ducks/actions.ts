import ActionType from "./actions.types";
import { IStockData, IPredictionData } from "../types";

export const updateStockPredictionData = (data: IPredictionData) => ({
  type: ActionType.UPDATE_STOCK_PREDICTION_DATA,
  payload: {
    value: data
  }
});
