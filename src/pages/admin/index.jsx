import React from "react";
import "./style.scss";
import AdminSideBar from "../../components/adminSidebar/index.jsx";
import AdminList from "../../components/adminList/index.jsx";
import { useSelector } from "react-redux";
import AdminAdd from "../../components/adminAdd/index.jsx";
import AdminAds from "../../components/adminAds/index.jsx";
function AdminPage() {
  const adminCategory = useSelector((state) => state.interface.adminCategory);
  return (
    <div className="AdminPage">
      <AdminSideBar />
      {adminCategory == "add" ? (
        <AdminAdd />
      ) : adminCategory == "hero" ? (
        <AdminAds type={adminCategory} />
      ) : adminCategory == "offer" ? (
        <AdminAds type={adminCategory} />
      ) : (
        <AdminList type={adminCategory} />
      )}
    </div>
  );
}

export default AdminPage;
