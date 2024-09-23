import { Outlet } from "react-router-dom";
import Navbar from "../fragments/dashboard/Navbar";

export default function DashboardLayout() {
  return (
    <div>
        <Navbar/>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}
