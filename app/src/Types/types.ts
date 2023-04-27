
export type Person = {
    name : string,
    age : number,
    count : number
}

export type State = {
    Person : Person,
    personInput : string,


};

export type Store = {
    personState : State
}