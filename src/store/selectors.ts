import { createSelector } from 'reselect';
import { ReduxState } from '.';


export const selectUiState = (reduxState: ReduxState) => reduxState.uiStateReducer;


export const selectNativeData = createSelector(selectUiState, uiState => uiState.nativeData,);

