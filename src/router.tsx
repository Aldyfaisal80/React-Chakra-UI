import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/guest/Home";
import Products from "./pages/guest/Etalase";
import AdminProducts from "./pages/admin/products/Products"
import DashboardLayout from "./components/layouts/DashboardLayout";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import AuthLayouts from "./components/layouts/AuthLayouts";
import Login from "./pages/auth/login/Index";
import Register from "./pages/auth/register/Index";
import Etalase from "./pages/guest/Etalase";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/etalase',
                element: <Etalase />
            }
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
                element: <Products />
            },
            {
                path: '/dashboard/productsAdmin',
                element: <AdminProducts />
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