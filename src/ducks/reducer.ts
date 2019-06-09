import initialstate from "./initialstate";
import actionType from "./actions.types";
import produce from "immer";
import { IAppState } from "../types";

export default (
  state: IAppState = initialstate,
  action: { type: actionType; payload: any }
) =>
  produce(state, draftState => {
    switch (action.type) {
      case actionType.UPDATE_STOCK_PREDICTION_DATA:
        draftState.predictionData = action.payload.value;
        break;
      default:
        break;
    }
  });
