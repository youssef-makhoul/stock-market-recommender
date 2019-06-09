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
      case actionType.SAVE_DATA:
        draftState.stockData = action.payload.value;
        break;
      default:
        break;
    }
  });
