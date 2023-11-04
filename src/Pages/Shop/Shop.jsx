import { Hero } from "../../components/Hero/Hero"
import { Offers } from "../../components/Offers/Offers"
import { Popular } from "../../components/Populiar/Popular"
import Styles from "./shop.module.scss"

export const Shop = () => {
    return <div>
       <Hero/>
       <Popular/>
       <Offers/>
    </div>
}