import React from "react";
import "./style.scss";
import AdminSideBar from "../../components/adminSidebar/index";
import AdminList from "../../components/adminList/index";
import { useSelector } from "react-redux";
import AdminAdd from "../../components/adminAdd/index";
import AdminAds from "../../components/adminAds/index";
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
