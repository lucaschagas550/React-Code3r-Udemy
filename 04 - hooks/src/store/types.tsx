export interface User {
    name: string;
}

export interface AppState {
    cart: any[];
    products: any[];
    user: User | null;
    number: number;
}

//Tipo de acao para alterar o estado
export type AppAction =
    | { type: 'numberAdd2' }
    | { type: 'numberMulti7' }
    | { type: 'numberDiv25' }
    | { type: 'numberInt' }
    | { type: 'numberAddN'; payload: number }
    | { type: 'login'; payload: string };
