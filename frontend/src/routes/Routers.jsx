import Home from "../pages/Home";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetails from "../pages/Doctors/DoctorDetails";

import MyAccount from "../Dashboard/user-account/MyAccount";
import Dashboard from "../Dashboard/doctor-account/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";

import CheckoutSuccess from "../pages/CheckoutSuccess";

import { Routes, Route } from "react-router-dom";
import AiAnalysis from "../pages/AiAnalysis";
import Report from "../pages/Report";
import WomenSection from "../pages/WomenSection";

import PeriodTracker from "../pages/PeriodTracker";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/analysis" element={<AiAnalysis />} />
      <Route path="/report" element={<Report />} />
      <Route path="/women-section" element={<WomenSection />} />
      <Route path="/checkout-success" element={<CheckoutSuccess />} />
      <Route path="/period-tracker" element={<PeriodTracker />} />
      <Route path="/users/profile/me" element={<ProtectedRoutes allowedRoles={['patient']} ><MyAccount /></ProtectedRoutes>} />
      <Route path="/doctors/profile/me" element={<ProtectedRoutes allowedRoles={['doctor']}><Dashboard /></ProtectedRoutes>} />
    </Routes>
  );
};

export default Routers;
