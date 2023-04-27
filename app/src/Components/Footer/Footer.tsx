import React from 'react'
import '../../SASS/Footer.sass'

const Footer : React.FC = () : React.ReactElement => {
    return (
        <div className = 'footer'>
            <div className="footer-block block">
                <div className="footer-brand">
                    Person finder
                </div>
            </div>
        </div>
    )
}

export default Footer
