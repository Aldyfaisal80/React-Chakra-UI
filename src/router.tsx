import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/guest/Home";
import AdminProducts from "./pages/admin/products/Index"
import DashboardLayout from "./components/layouts/DashboardLayout";
import Dashboard from "./pages/admin/dashboard/Index";
import AuthLayouts from "./components/layouts/AuthLayouts";
import Login from "./pages/auth/login/Index";
import Register from "./pages/auth/register/Index";
import CreateProduct from "./pages/admin/products/create/index";
import CreateCategory from "./pages/admin/category/create/index";
import Category from "./pages/admin/category";
import UpdateProduct from "./pages/admin/products/update";
import DetailsProducts from "./pages/admin/products/detail/Index";
import DetailCategory from "./pages/admin/category/detail";
import UpdateCategory from "./pages/admin/category/update";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: 'products',
                element: <AdminProducts />
            },
            {
                path: 'category',
                element: <Category />
            },
            {
                path: 'create-product',
                element: <CreateProduct />
            },
            {
                path: 'detail-product/:id',
                element: <DetailsProducts />
            },
            {
                path: 'update-product/:id',
                element: <UpdateProduct />
            },
            {
                path: 'create-category',
                element: <CreateCategory />
            },
            {
                path: 'update-category/:id',
                element: <UpdateCategory />
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayouts />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    }
])