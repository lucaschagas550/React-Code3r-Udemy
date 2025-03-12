import { AppState, AppAction } from '../types';


export function numberReducer(state: AppState, action: AppAction): AppState {
    switch (action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 };
        case 'numberMulti7':
            return { ...state, number: state.number * 7 };
        case 'numberDiv25':
            return { ...state, number: state.number / 25 };
        case 'numberInt':
            return { ...state, number: Math.floor(state.number) };
        case 'numberAddN':
            return { ...state, number: state.number + (action.payload as number) };
        default:
            return state;
    }
}
