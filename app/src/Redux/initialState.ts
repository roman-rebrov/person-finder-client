import {Person as PersonType, State} from '../Types/types'



const Person : PersonType = {
    name: '',
    age: 0,
    count: 0
}

let InitialState : State = {
    Person,
    personInput: ''
}
export default InitialState;