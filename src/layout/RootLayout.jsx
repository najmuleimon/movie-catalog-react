import { Outlet } from "react-router-dom";
import Footer from "../components/navigation/Footer";
import Header from "../components/navigation/Header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
