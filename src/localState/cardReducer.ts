import { v4 as uuidv4 } from 'uuid';

export function cardReducer(state:any, action:any) {
    switch(action.type) {
        case 'add': {
            const { city, population } = action.payload;
            return [
                ...state,
                {
                    id: uuidv4(),
                    city,
                    population
                }
            ]
        }
        case 'delete': {
            const { id } = action.payload;
            return state.filter( (el:any) => el.id !== id );
        }
        case 'filter': {
            const { searchValue } = action.payload;
            return state.filter( (el:any) => el.city !== el.city.includes(searchValue) || el.population !== el.population.includes(searchValue) );
        }
        default:
            throw new Error("Unknown state");
    }
}