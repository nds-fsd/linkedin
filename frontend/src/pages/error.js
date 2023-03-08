import styles from "./error.module.css";
import { useNavigate } from "react-router-dom";



const ErrorPage = (props) => {
const localStorage = window.localStorage["user-session"]

  const navigate = useNavigate()
  return (
    <>
      
      <div className={styles.general}>

        <div className={styles.header}>
          <h3>404</h3>
          <h1>Lo sentimos, la página que buscas no existe</h1>
          
        </div>
        <div className={styles.body}>
          <div className ={styles.body__1}>
            <div className ={styles.bulma}>
             
              {localStorage  ? (<button className={styles.bhome} onClick={() => navigate("/home")}> Volver a inicio </button>):(<button className={styles.bhome} onClick={() => navigate("/")}> back to home </button>)}
              {/* <button className={styles.bhome} onClick={() => navigate("/home")}> back to home </button> */}
            </div>
            <img  className ={styles.barrs} src="./img/barras.svg" alt="logo"/>
          </div>
        
          <div className ={styles.body__2}>
          <img  className ={styles.imgCentral} src="./img/isometric-home 1.png" alt="logo"/>
          </div>

        </div>
        
       
       
        
      
      </div>
     
    </>
  );
};

export default ErrorPage;
