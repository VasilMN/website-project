import Styles from "./navbar.module.scss";
import logo from "../../assets/imges/logo.png"
import cart_icon from "../../assets/imges/cart_icon.png"

export const Navbar = () => {

    return <div className={Styles.navbar}>
        <div className={Styles.nav_logo}>
        <img src={logo} alt="logo" />
        <p>SHOPER</p>
        </div>
        <ul className={Styles.nav_menu}>
            <li>Shop <hr /></li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
        </ul>
        <div className={Styles.nav_login_cart}>
            <button>Login</button>
            <img src={cart_icon} alt="cart_icon" />
            <div className={Styles.nav_cart_count}>0</div>
        </div>

    </div>
}