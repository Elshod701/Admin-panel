import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import MainLayout from "./pages/main-layout";
import CatygoryList from "./pages/category/categoryList/catygoryList";
import Subcatygory from "./pages/category/subCatygory/subcatygory";
import User from "./pages/user/user";
import CreateProduct from "./pages/category/create-product/create-product";
import Home from "./pages/home/home";
import CreateCategory from "./pages/category/create-catygory/create-catygory";
import EdiCatygory from "./pages/category/edit-cotygory/edit_catygory";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<MainLayout />}>
          <Route path="pointer" element={<Home />} />
          <Route path="catygoryList" element={<CatygoryList />} />
          <Route path="Subcatygory" element={<Subcatygory />} />
          <Route path="User" element={<User />} />
          <Route path="createProduct" element={<CreateProduct />} />
          <Route path="createCatygory" element={<CreateCategory />} />
          <Route path="ediCatygory/:id" element={<EdiCatygory />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
