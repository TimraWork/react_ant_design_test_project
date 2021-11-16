import { ActionTypes } from './../@types/types.d';
import {createContext} from 'react';

export type CardType = {
    id: string;
    city: string;
    population: string;
    backgroundColor: string;
    textColor: string;
}

export type InitialStateType = CardType[] | [];

export const CardContext = createContext<{
    cardState: InitialStateType;
    dispatchCard: React.Dispatch<ActionTypes>;
}>({
    cardState: [],
    dispatchCard: () => null
  });