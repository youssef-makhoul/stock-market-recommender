import ActionType from "./actions.types";
import { IStockData } from "../types";

export const SaveData = (data: Array<IStockData>) => ({
  type: ActionType.SAVE_DATA,
  payload: {
    value: data
  }
});
