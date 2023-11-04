import Styles from "./navbar.module.scss";
import logo from "../../assets/imges/logo.png"
import cart_icon from "../../assets/imges/cart_icon.png"
import { useState } from "react";
import { NavLink  } from "react-router-dom"

export const Navbar = () => {

const [menu, setMenu] = useState("shop")

    return <div className={Styles.navbar}>
        <div className={Styles.nav_logo}>
        <img src={logo} alt="logo" />
        <p>SHOPER</p>
        </div>
        <ul className={Styles.nav_menu}>
            <li onClick={ ()=> {setMenu("shop")}}><NavLink to="/">Shop</NavLink> {menu === "shop"? <hr />:<></>} </li>
            <li onClick={()=> {setMenu("mens")}}><NavLink to="/mens">Men</NavLink> {menu === "mens"? <hr />:<></>}</li>
            <li onClick={()=> {setMenu("womens")}}><NavLink to="/womens">Women</NavLink> {menu === "womens"? <hr />:<></>}</li>
            <li onClick={()=> {setMenu("kids")}}><NavLink to="/kid">Kids</NavLink> {menu === "kids"? <hr />:<></>}</li>
        </ul>
        <div className={Styles.nav_login_cart}>
        <NavLink to="/login"><button>Login</button></NavLink>
            
           <NavLink to="/cart"> <img src={cart_icon} alt="cart_icon" /></NavLink>
            <div className={Styles.nav_cart_count}>0</div>
        </div>

    </div>
}