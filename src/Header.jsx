
import "./.Header.scss"

function Header (){
    return (
        <div className="header">
            <div className="header__logo">
                <a href="#"><p className="logo">PLANT</p></a>
            </div>
            <div className="header__nav">
              <nav>
                <ul className='nav__list'>
                  <li className='about'><a href="#aboutUs">ABOUT US</a></li>
                  <li className='events'><a href="#events">EVENTS</a></li>
                  <li className='contact'><a href="#contact">CONTACT</a></li>
                </ul>
            
              </nav>
            </div>
        </div>
    )
    }
    export default Header