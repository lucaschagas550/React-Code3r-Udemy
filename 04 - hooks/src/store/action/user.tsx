import { Dispatch } from 'react';
import { AppAction } from '../types';

export function login(dispatch: Dispatch<AppAction>, name: string) {
    dispatch({ type: 'login', payload: name });
}
