import { combineReducers } from "redux";
import Person from "./defaultReducer";


export const rootReducer : {} = combineReducers({
    personState : Person, 
});
