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
                path: '/dashboard/products',
                element: <AdminProducts />
            },
            {
                path: '/dashboard/category',
                element: <Category />
            },
            {
                path: '/dashboard/create-product',
                element: <CreateProduct />
            },
            {
                path: '/dashboard/create-category',
                element: <CreateCategory />
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