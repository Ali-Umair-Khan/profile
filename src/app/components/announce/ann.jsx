import { Link } from "react-scroll";

import './ann.scss'
const Ann = () => {
    return(
        <section className='ann'>
            <h1 className='ann__h1'>Lets build and provide solutions together!</h1>
            <Link to='ann'  smooth={true} duration={500}>
              <button className='ann__btn'> Learn more </button>
            </Link>
        </section>
    )
}

export default Ann


{/* <Link to='work'  smooth={true} duration={500}>
                          <a onClick={handleMenuItemClick}>Work <FontAwesomeIcon icon={faHurricane} style={{ fontSize: '1.5rem', marginLeft:'0.5rem'}} /></a>
                          </Link> */}