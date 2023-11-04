
import Styles from "./item.module.scss"

export const Item = (props) => {
     return <div className={Styles.item}>
          <img src={props.image} alt="image" />
          <p>{props.name}</p>
          <div className={Styles.item_prices}>
               <div className={Styles.item_price_new}>
                    {props.new_price}
               </div>
               <div className={Styles.item_price_old}>
                    {props.old_price}
               </div>
          </div>
     </div>
}