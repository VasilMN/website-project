import { Cart } from "./Pages/Cart/Cart"
import { LoginSignup } from "./Pages/LginSinup/LoginSignup"
import { Product } from "./Pages/Product/Product"
import { Shop } from "./Pages/Shop/Shop"
import  ShopCategory  from "./Pages/ShopCategory/ShopCategory"
import { Footer } from "./components/Footer/Footer"
import { Navbar } from "./components/Navbar/Navbar"
import men_banner from "./assets/imges/banner_mens.png"
import women_banner from "./assets/imges/banner_women.png"
import kid_banner from "./assets/imges/banner_kids.png"


import {Route,Routes} from "react-router-dom"

function App() {


  return <div >
        <Navbar/>
          <Routes>
             <Route path="/" element={<Shop/>}/>
             <Route path="/mens" element={<ShopCategory banner = {men_banner} Category = "men"/>}/>
             <Route path="/womens"  element ={<ShopCategory banner = {women_banner} Category = "women"/>}/>
             <Route path="/kids"  element ={<ShopCategory banner = {kid_banner} Category = "kid"/>}/>
             <Route path="/product" element={<Product/>}>
                <Route path=":product" element={<Product/>}/>   
             </Route>
             <Route path="/cart" element={<Cart/>}/>
             <Route path="?login" element={<LoginSignup/>}/>
          </Routes>
          <Footer/>
  </div>
}

export default App
