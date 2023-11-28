
import Styles from "./productdisplay.module.scss"
import star_icon from "../../assets/imges/star_icon.png"
import star_dull_icon from "../../assets/imges/star_dull_icon.png"


export const ProductDisplay = ({ product }) => {

    return <div className={Styles.productdisplay}>
        <div className={Styles.productdisplay_left}>
            <div className={Styles.productdisplay_img_list}>
                <img src={product.image} alt="img" />
                <img src={product.image} alt="img" />
                <img src={product.image} alt="img" />
                <img src={product.image} alt="img" />
            </div >
            <div className={Styles.productdisplay_img}>

                <img className={Styles.productdisplay_main_img} src={product.image} alt="img" />
            </div>
        </div>
        <div className={Styles.productdisplay_right}>
            <h1>{product.name}</h1>

        <div className={Styles.productdisplay_right_star}>
                <img src={star_icon} alt="star_icon" />
                <img src={star_icon} alt="star_icon" />
                <img src={star_icon} alt="star_icon" />
                <img src={star_icon} alt="star_icon" />
                <img src={star_dull_icon} alt="star_dull_icon" />
                <p>(122)</p>
            </div>
            <div className={Styles.productdisplay_right_price}>

                <div className={Styles.productdisplay_right_price_old}>
                    ${product.old_price}
                </div>
                <div className={Styles.productdisplay_right_price_new}>
                    ${product.new_price}
                </div>
                
            </div>

                <div className={Styles.productdisplay_right_discription}>
                    <span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio et ipsum facilis, consequatur incidunt explicabo
                        </span>
                </div>

                <div className={Styles.productdisplay_right_size}>
                    <h2>Select size</h2>
                      <div className={Styles.productdisplay_right_sizes}>
                           <div>S</div>
                           <div>M</div>
                           <div>L</div>
                           <div>XL</div>
                           <div>XXL</div>
                       </div>
                </div>
                 <button>ADD TO CART</button>
                 <p className={Styles.productdisplay_right_category}> <span>category :</span> woumn, T-shirt Crop Top</p>
                 <p className={Styles.productdisplay_right_category}> <span>Tags :</span> Modern, Latest</p>
           

        </div>
    </div>
}