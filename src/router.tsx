import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/guest/Home";
import Products from "./pages/guest/Products";
import DashboardLayout from "./components/layouts/DashboardLayout";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import AuthLayouts from "./components/layouts/AuthLayouts";
import Login from "./pages/auth/login/Index";
import Register from "./pages/auth/register/Index";

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
                element: <Products />
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayouts />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    }
])