import { useContext } from "react";
import Styles from "./shopcategory.module.scss"
import { ShopContext } from "../../Context/ShopContext";
import dropdown_icon from "../../assets/imges/dropdown_icon.png"
import { Item } from "../../components/Item/Item";

 const ShopCategory = (props) => {
    
    const {all_product} = useContext(ShopContext)

    return <div className={Styles.shop_category}>
              <img className={Styles.shopcategory_banner} src={props.banner} alt="banner" />
              <div className={Styles.shopcategory_indexsort}>
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                  <div className={Styles.shopcategory_sort}>
                    sort by  <img src={dropdown_icon} alt="dropdown_icon" />
                  </div>

              </div> 
              
                  <div className={Styles.shopcategory_product}>
                    {all_product.map((item,i) => {
                       console.log(item);
                       console.log(props);

                        if (props.Category === item.category) {
                        
                            return  <Item
                            
                            key={i} 
                            id={item.id} 
                            name={item.name} 
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                            />

                        }  else  {
                         
                            return null
                        }                      
                    })}
                </div>

                <div className={Styles.shopcategory_loadmore}>
                     Explore More
                </div>
    </div>
}

export default ShopCategory;