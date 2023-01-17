import styles from './admin.module.css'
import AdminNavigation from "../components/administration/adminNavigation/adminNavigation";
import AdminFormDashBoard from "../components/administration/adminFormDashBoard/adminFormDashBoard";

const AdminPage = (props) => {
  return (
    <div className={styles.estructura}>
      <AdminNavigation />
      <AdminFormDashBoard />
    </div>
  );
};

export default AdminPage;
