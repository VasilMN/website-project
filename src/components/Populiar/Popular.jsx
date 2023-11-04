import Styles from "./popular.module.scss"
import data_product from "../../utils/data"
import { Item } from "../Item/Item"

export const Popular = () => {
    return <div className={Styles.popular}>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className={Styles.popular_item}>
            {data_product.map((item, i) => {
                return <Item key={i} 
                             id={item.id} 
                             name={item.name} 
                             image={item.image}
                             new_price={item.new_price}
                             old_price={item.old_price}
                />
            })}
        </div>

    </div>
} 