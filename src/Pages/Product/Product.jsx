import { useContext } from "react"
import Styles from "./product.module.scss"
import { ShopContext } from "../../Context/ShopContext"
import { useParams } from "react-router-dom"
import { Breadcrum } from "../../components/Breadcrums/Breadcrum"
import { ProductDisplay } from "../../components/ProductDispay/ProductDisplay"

export const Product = ( ) => {
   

    const {all_product} = useContext(ShopContext)
    const  productId  = useParams()
    

    const product = all_product.find((item) => {
       
         return  item.id === Number(productId.product)
    } )
 
    return <div>
           <Breadcrum   product = {product}/>
           <ProductDisplay  product = {product}/>
    </div> 
}