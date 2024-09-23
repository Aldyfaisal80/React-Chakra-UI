import { Outlet } from "react-router-dom";
import Navbar from "../fragments/guest/Navbar";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}
