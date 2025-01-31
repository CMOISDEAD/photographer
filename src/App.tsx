import { Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";

function App() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App;
