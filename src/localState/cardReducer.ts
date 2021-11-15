import { v4 as uuidv4 } from 'uuid';

export function cardReducer(state:any, action:any) {
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
            return state.filter( (el:any) => el.id !== id );
        }
        case 'filter': {
            const { filter } = action.payload;
            return [
                ...state,
                {
                    filter
                }
            ]
        }
        default:
            throw new Error("Unknown state");
    }
}