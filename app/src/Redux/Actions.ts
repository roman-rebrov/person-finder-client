import { Person } from "../Types/types";

export const POST_PERSON : string = 'POST_PERSON';
export const CHANGE_INPUT : string = 'CHANGE_INPUT';

export const ASYNC_PERSON_GET_REQUEST : string = 'ASYNC_PERSON_GET_REQUEST';

export type RequestActionType = {
    type : string, 
    param : string
};

export const postPersonActionCreater = (person : Person) : any => { 
    return {
        type: POST_PERSON,
        payload: person
    };
}
