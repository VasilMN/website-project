import Styles from "./newcollection.module.scss"
import new_collections from "../../utils/new_collections"
import { Item } from "../Item/Item"

export const NewCollection = () => {
    return <div className={Styles.newcollection} >
        <h1>NEW COLLECTION</h1>
        <hr/>
        <div className={Styles.collections}>
           {new_collections.map((item,i) => {
                
                return <Item 
                             key={i} 
                             id={item.id} 
                             name={item.name} 
                             image={item.image}
                             new_price={item.new_price}
                             old_price={item.old_price}  />
           })}
        </div>

    </div>
}