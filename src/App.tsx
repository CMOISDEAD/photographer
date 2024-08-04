import { Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App;
