
import produce from 'immer';
import { Action } from '../actions';

export interface UIState {
  nativeData: string[]
}
export const initialState: Readonly<UIState> = {
  nativeData: ["21"]
};

export default (originalState = initialState, action: Action) =>
  produce(originalState, state => {
    switch (action.type) {
      case "setNativeData":
        state.nativeData = action.payload
        return;
    }
  });
