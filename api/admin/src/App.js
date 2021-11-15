import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

function App() {

  const user = useSelector(state => state.user.currentUser);
  //const user = false

  var admin = "";

  if ((JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser) !== null) {
    admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin;
  }

  return (
    <Router>
      {admin && (
        <Topbar />
      )}
      <div className="container">
        {admin && (
          <Sidebar />
        )}
        <Routes>
          <Route exact path="/" element={user ? <Navigate to="/home" /> : <Login />} />
          {admin && (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/user/:userId" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/newproduct" element={<NewProduct />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
