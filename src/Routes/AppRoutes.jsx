import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Product from '../Pages/Product'
import Register from '../Pages/Register'
import Login from '../Pages/Login'
import Categories from '../Pages/Categories'
import Checkout from '../Pages/Checkout'
import Details from '../Pages/Details'
import Blog from '../Pages/Blog'
import BlogDetails from '../Pages/BlogDetails'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Card from '../Pages/Card'
import ProductDetails from '../Pages/ProductDetails'

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