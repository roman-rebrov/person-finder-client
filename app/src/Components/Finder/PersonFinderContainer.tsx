import React from 'react';
import {Store} from '../../Types/types';
import { connect } from 'react-redux';
import { CHANGE_INPUT, ASYNC_PERSON_GET_REQUEST } from '../../Redux/Actions';
import PersonFinder from './PersonFinder';


const PersonFinderContainer : React.FC = () => {

    const sendRequestActionCreator = (name : string) => ({
        type: ASYNC_PERSON_GET_REQUEST, 
        param: name
    });
    const changeInputActionCreator = (input : string) => ({
        type: CHANGE_INPUT, 
        payload: input
    });

    const mapStateToProps = (store : Store) : any => {   
        return {
            person : store.personState.Person,
            input : store.personState.personInput
        }
    };

    const mapDispatchToProps = (dispatch : any) : any => {
        return { 
            sendRequest : (name : string) => { 
                dispatch(sendRequestActionCreator(name));
            },
            changeInput : (input : string) => {                
                dispatch(changeInputActionCreator(input));
            }
        }
    };

    const PersonFinderWrap = connect(mapStateToProps, mapDispatchToProps)(PersonFinder)

    return ( <PersonFinderWrap/> )
}

export default PersonFinderContainer;
