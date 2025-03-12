import { numberReducer } from './number';
import { userReducer } from './user';
import { AppState, AppAction } from '../types';

export function reducer(state: AppState, action: AppAction): AppState {
    let newState = numberReducer(state, action);
    return userReducer(newState, action);
}
