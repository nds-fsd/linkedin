import React from 'react'
import NavBar from '../components/navBar/NavBar'
import styles from "./panel.module.css";
import Button from '../components/button/Button';
import EditUser from '../components/form/EditUser';

const PanelEdit = () => {
  return (
    <div>panelRegisterUser
      <div>navbar
        <NavBar />
      </div>
      <div className={styles.container}>
      <div className={styles.leftBar}> left bar
      <Button />
      </div>
      <div className={styles.center}> center
      <EditUser />
      </div>
      </div>


    </div>
  )
}

export default PanelEdit