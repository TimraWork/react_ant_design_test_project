declare global {
    type Reducer<S, A> = (prevState: S, action: A) => S;
}

export {};