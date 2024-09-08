import React from "react";

import Navbar from "../../components/signInNavbar";
import Reset from "../../components/resetPassword/Reset";

const index = () => {
  return (
    <div className="container">
      <Navbar />
      <Reset />
    </div>
  );
};

export default index;
