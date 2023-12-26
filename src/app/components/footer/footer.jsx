import Link from 'next/link';
import './footerStyle.css'
 const Footer = () => {
    return(
        <div className='footer'>
            <div className='footer__image'>
                <img src='/X.png' alt="X corps"/>
            </div>

            <div className='footer__copyright'>
                <p>&copy; 2023 X Ventures, Inc. Version 24/12/23. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer