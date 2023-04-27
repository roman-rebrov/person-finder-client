import React from 'react'
import '../../SASS/Header.sass'


const Header : React.FC<any> = () => {

    return (
        <div className='header-main-container'>
            <header className="App-header block " >
                <div className='header'> 
                    Person finder
                </div>
            </header>
        </div> 
    )
}

export default Header;
