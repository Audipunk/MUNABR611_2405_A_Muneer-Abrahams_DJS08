import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";
import HostDashboard from "./pages/HostDashboard";
import HostIncome from "./pages/HostIncome";
import HostReviews from "./pages/HostReviews";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<VanDetail />} />

        {/* Nested Routes for Host Dashboard */}
        <Route path="host" element={<HostDashboard />}>
          <Route path="income" element={<HostIncome />} />
          <Route path="reviews" element={<HostReviews />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
