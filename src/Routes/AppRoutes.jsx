import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Product from '../Pages/Product/Product'
import Register from '../Pages/Register/Register'
import Login from '../Pages/Login/Login'
import Card from '../Pages/Card/Card'
import Categories from '../Pages/Categories/Categories'
import Checkout from '../Pages/Checkout/Checkout'
import ProductDetails from '../Pages/Product details/ProductDetails'
import Blog from '../Pages/Blog/Blog'
import BlogDetails from '../Pages/Blog details/BlogDetails'
import About from '../Pages/About/About'
import Contact from '../Pages/Contact/Contact'
import Details from '../Pages/Details/Details'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/card" element={<Card/>} />
            <Route path="/categories" element={<Categories/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/product-details" element={<ProductDetails/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/blog-details" element={<BlogDetails/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/details" element={<Details/>} />
        </Routes>
    </div>
  )
}
export default AppRoutes