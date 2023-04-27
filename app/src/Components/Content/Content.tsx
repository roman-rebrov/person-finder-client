import React from 'react'
import '../../SASS/Content.sass'
import { Switch, Route } from 'react-router-dom' 


import {
    PersonFinderContainer,
    } from '../../Components'


const Content : React.FC = ( ) => {

    return ( 
        <div className= "content-main-container" >
            <div className="content-child-container  block" >
                <Switch>
                    <Route exact path='/' render={() =>  <PersonFinderContainer/>} />
                </Switch>
            </div> 
        </div>
    )
};

export default Content
