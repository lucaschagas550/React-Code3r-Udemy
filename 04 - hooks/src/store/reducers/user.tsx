import { AppState, AppAction } from '../types';

export function userReducer(state: AppState, action: AppAction): AppState {
    switch (action.type) {
        case 'login':
            return { ...state, user: { name: action.payload as string } };
        default:
            return state;
    }
}
