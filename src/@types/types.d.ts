import * as CardActions from '../localState/cardActions';

// Определить тип
export type InferValueTypes<T> = T extends {[key: string]: infer U} ? U : never;
export type ActionTypes = ReturnType<InferValueTypes<typeof CardActions>>;
