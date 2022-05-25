import React from "react";
import GoToTop from "../go-to-top/go-to-top";
import Footer from "./footer/footer";
import Navigation from "./navigation/navigation";

const Layout = ({ children, footer }) => {
  return (
    <>
      {footer == "none" ? (
        <>
          <Navigation />
          {children}
        </>
      ) : (
        <>
          <Navigation />
          {children}
          <GoToTop />
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
