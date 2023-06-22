import { useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/App.css";
import NavBarMain from "../components/const-componant/Navbars/NavBarMain";
import LinksMe from "../components/const-componant/footer/linksMe";
import { HomePage } from "../pages/home/HomePage";
import { LoginPage } from "../pages/regesteration/LoginPage/LoginPage";
import { SignUpPage } from "../pages/regesteration/SignUpPage/SignUpPage";
import { AllCategory } from "../pages/ViewMorePage/AllCategory";
import { AllBrand } from "../pages/ViewMorePage/AllBrand";
import { ProductsPage } from "../pages/products/ProductsPage";
import { ProductDetailsPage } from "../pages/productDetails/ProductDetailsPage";
import { CartPage } from "../pages/cart/CartPage";
import { FavoritePage } from "../pages/favorite/FavoritePage";
import { CheckoutPage } from "../pages/checkout/CheckoutPage";
import { AboutPage } from "../pages/about/AboutPage";
import { ContantPage } from "../pages/contant/ContactPage";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { ErrorPage } from "../pages/ErrorPage";
import { Codding } from "./Codding";
import { DashboardPage } from "../adminPanal/pages/DashboardPage";
import { NavBarDash } from "../adminPanal/components/NavBarDash";

import { Users } from "../adminPanal/pages/UsersPage";
import { ProductsAdminPage } from "../adminPanal/pages/ProductsAdminPage";
import { UpdateProduct } from "../adminPanal/pages/UpdateProductsPage";
import { OrdersPage } from "../adminPanal/pages/OrdersPage";
import { OrderPage } from "../adminPanal/pages/OrderPage";
import { MessagesPage } from "../adminPanal/pages/MessagesPage";

// import Popops from "../components/const-componant/popops/Popops";

function App() {
  let constraintsRef = useRef(null);
  let user = useSelector((e) => e.reducerAuth.profile);
  let admin=useSelector(e=>e.admin.profile)
  

  return (
    <motion.div className="drag-area area" ref={constraintsRef}>
      <Codding />
      <div className="App pb-5 pt-1">
        {/* <Popops/> */}

        <BrowserRouter basename={"access-point"}>
          {admin === null ? (
            <>
              <NavBarMain constraintsRef={constraintsRef} />
              <LinksMe constraintsRef={constraintsRef} />{" "}
            </>
          ) : (
            <NavBarDash />
          )}

          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            {admin === null ? (
              <>
                <Route path="/" element={<HomePage />} />
                <Route path="/all-category" element={<AllCategory />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/all-brand" element={<AllBrand />} />
                <Route
                  path="/product-details/:id"
                  element={<ProductDetailsPage />}
                />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/favorite" element={<FavoritePage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContantPage />} />
                {user !== null && (
                  <Route path="/profile" element={<ProfilePage />} />
                )}
                <Route path="*" element={<ErrorPage />} />
              </>
            ) : (
              <>
                {/*admin pages;*/}

                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/dashboard/products" element={<ProductsAdminPage />} />
                <Route path="/dashboard/update-product/:id" element={<UpdateProduct />} />
                <Route path="/dashboard/users" element={<Users />} />
                <Route path="/dashboard/orders" element={<OrdersPage />} />
                <Route path="/dashboard/order/:id" element={<OrderPage />} />
                <Route path="/dashboard/messages" element={<MessagesPage />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </div>
    </motion.div>
  );
}

export default App;
