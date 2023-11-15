import Styles from "./breadcrum.module.scss"
import arrow_icon from '../../assets/imges/breadcrum_arrow.png'



export const Breadcrum = ({ product }) => {
 
    return <div className={Styles.Breadcrum}>

        <span>Home</span> <img src={arrow_icon} alt="arrow_icon" /> 
        <span>SHOP</span> <img src={arrow_icon} alt="arrow_icon" />{product.category} 
        <img src={arrow_icon} alt="arrow_icon" />{product.name}
        
    </div>

}