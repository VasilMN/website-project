import Styles from "./offers.module.scss"
import exclusive_img  from "../../assets/imges/exclusive_image.png"

export const Offers = () => {
   return <div className={Styles.offers}>
        <div  className={Styles.offers_left} >
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check now</button>
        </div>
        <div  className={Styles.offers_right}>
            <img src={exclusive_img} alt="exclusive_img" />
        </div>
   </div>
}