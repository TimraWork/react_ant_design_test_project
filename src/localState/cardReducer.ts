import { ActionTypes } from './../@types/types.d';
import { v4 as uuidv4 } from 'uuid';
import { CardType, InitialStateType } from './cardContext';

export function cardReducer(state:InitialStateType, action:ActionTypes) : InitialStateType {
    switch(action.type) {
        case 'add': {
            const { city, population, backgroundColor, textColor } = action.payload;
            return [
                ...state,
                {
                    id: uuidv4(),
                    city,
                    population,
                    backgroundColor,
                    textColor
                }
            ]
        }
        case 'delete': {
            const { id } = action.payload;
            return state.filter( (el:CardType) => el.id !== id );
        }
        default:
            return state;
    }
}