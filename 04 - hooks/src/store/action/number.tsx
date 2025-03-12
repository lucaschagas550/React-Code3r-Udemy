import { Dispatch } from 'react';
import { AppAction } from '../types';

export function numberAdd2(dispatch: Dispatch<AppAction>) {
    dispatch({ type: 'numberAdd2' });
}
