import { reducer } from './reducers';
import { AppState } from './types';

const initialState: AppState = {
    cart: [],
    products: [],
    user: null,
    number: 0,
};

export { initialState, reducer };
