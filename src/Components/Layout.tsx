import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <div>
      <Image
        className="top-0 relative sm:hidden"
        src="/bgnav.png "
        alt="bg"
        width={500}
        height={500}
      />
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
