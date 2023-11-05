import { Cart } from "./Pages/Cart/Cart"
import { LoginSignup } from "./Pages/LginSinup/LoginSignup"
import { Product } from "./Pages/Product/Product"
import { Shop } from "./Pages/Shop/Shop"
import { ShopCategory } from "./Pages/ShopCategory/ShopCategory"
import { Footer } from "./components/Footer/Footer"
import { Navbar } from "./components/Navbar/Navbar"
import {Route,Routes} from "react-router-dom"

function App() {


  return <div >
        <Navbar/>
          <Routes>
             <Route path="/" element={<Shop/>}/>
             <Route path="/mens" element={<ShopCategory  Category = "mens"/>}/>
             <Route path="/womens"  element ={<ShopCategory Category = "womens"/>}/>
             <Route path="/kids"  element ={<ShopCategory Category = "kid"/>}/>
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
