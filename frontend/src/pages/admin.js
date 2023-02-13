import { useState, useEffect } from "react";
import styles from "./admin.module.css";
import AdminNavigation from "../components/administration/adminNavigation/adminNavigation";
import AdminFormDashBoard from "../components/administration/adminFormDashBoard/adminFormDashBoard";
import AdminFormElements from "../components/administration/adminForm/adminFormElements";
import AdminLogOut from "../components/administration/adminLogOut/adminLogOut";
import AdminHome from "../components/administration/adminHome/adminHome";

const AdminPage = (props) => {
  console.log("inicio");

  const [navigationIdSelected, setNavigationIdSelected] = useState("dashboard");
  const [reload, setReload] = useState(false);

  const reloadElement = () => {
    setReload(!reload);
    console.log("reload" + reload.toString());
  };

  const saveNavigationIdSelected = (param) => {
    setNavigationIdSelected(param);
  };

  useEffect(() => {}, [navigationIdSelected]);

  return (
    <div className={styles.estructura}>
      <AdminNavigation
        navigationIdSelected={navigationIdSelected}
        saveNavigationIdSelected={saveNavigationIdSelected}
        reloadElement={reloadElement}
      />
      {navigationIdSelected === "dashboard" ? (
        <AdminFormDashBoard
          navigationIdSelected={navigationIdSelected}
          saveNavigationIdSelected={saveNavigationIdSelected}
        />
      ) : navigationIdSelected === "logout" ? (
        <AdminLogOut />
      ) : navigationIdSelected === "home" ? (
        <AdminHome />
      ) : (
        <AdminFormElements
          reload={reload}
          navigationIdSelected={navigationIdSelected}
        />
      )}
    </div>
  );
};

export default AdminPage;
