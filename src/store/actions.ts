
import { ActionValue, createAction, createActions, NoArgAction, ToggleAction, } from 'redux-type-actions';

const actions = createActions({

  // UI
  setNativeData: createAction<string[]>(),
});

export type Action = ActionValue<typeof actions>;

export default actions;
