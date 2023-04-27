import { State } from '../Types/types';
import { POST_PERSON, CHANGE_INPUT } from './Actions'
import InitialState from './initialState';
 
 
 const defaultReducer = (state : State = InitialState, action : any) : State => {


    switch(action.type) {
        case POST_PERSON:            
            return ({
                ...state,
                Person: {
                    ...action.payload
                }
            })
            case CHANGE_INPUT:   
            return ({
                ...state,
                personInput: action.payload
            })

    }
    return state
};

export default defaultReducer;