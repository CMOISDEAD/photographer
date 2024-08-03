import { Outlet } from "react-router-dom"
import { Navbar } from "../Navbar"

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto">
        <Outlet />
      </main>
    </div>
  )
}
