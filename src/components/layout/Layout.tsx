import { motion as m } from "framer-motion"
import { Outlet } from "react-router-dom"

import { Navbar } from "./Navbar"

const pageVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -50,
  },
};

export const Layout = () => {
  return (
    <m.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      className="min-h-screen text-white bg-black"
    >
      <Navbar />
      <main>
        <Outlet />
      </main>
    </m.div>
  )
}
