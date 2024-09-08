import Navbar from "../../components/navbar/index";

import { Routes, Route, useParams } from "react-router-dom";

const Header = () => {
  let { type } = useParams();

  return <Navbar />;
};

export default Header;
