import React from "react";
import Footer from "../components/Footer/Footer";
import MainHeader from "../components/MainHeader/MainHeader";
import {Outlet} from "react-router-dom";
const  Layout=()=>{
  return (
    <>
      <MainHeader/>
      <Outlet/>
      <Footer/>
    </>
  );
}
export default Layout;
