import Styles from "./footer.module.scss"
import footer_logo from "../../assets/imges/logo_big.png"
import instagram_icon from "../../assets/imges/instagram_icon.png"
import pintester_icon from "../../assets/imges/pintester_icon.png"
import Whatsapp_icon from "../../assets/imges/Whatsapp_icon.png"


export const Footer = () => {
    return <footer className={Styles.footer}>
        <div className={Styles.footer_logo}>
            <img src={footer_logo} alt="footer_logo" />
            <p>SHOPER</p>
            
        </div>
        <ul className={Styles.footer_links}>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
           <div className={Styles.footer_social_icon}>
            <div className={Styles.footer_icon_container}>
                <img src={instagram_icon} alt="instagram_icon" />

            </div>
            <div className={Styles.footer_icon_container}>
                <img src={pintester_icon} alt="pintester_icon" />

            </div>
            <div className={Styles.footer_icon_container}>
                <img src={Whatsapp_icon} alt="whatsapp_icon" />

            </div>

           </div>  

           <div className={Styles.footer_copyright}>
                     <hr />
                     <p>Copyright @ 2023 - All Right Reserved.</p>
           </div>
    </footer>

}