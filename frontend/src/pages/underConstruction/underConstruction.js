import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./underConstruction.module.css";

const UnderConstructionPage = (props) => {
  const navigate = useNavigate();

  const handleTimeOut = () => {
    navigate("/home");
  };

  useEffect(() => {
    //creamos un TimeOut para volver a la Home al cabo X segundos

    const timer = setTimeout(() => {
      handleTimeOut();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className={styles.section}>
        <span className={styles.blinker}>Under Construction</span>
        <div className={styles.scroll} style={{ "--d": 25, "--y": 200 }}>
          <div>
            <span>
              Police line do not cross - Police line do not cross - Police line
              do not cross - Police line do not cross - Police line do not cross
              - Police line do not cross - Police line do not cross - Police
              line do not cross - Police line do not cross - Police line do not
              cross - Police line do not cross - Police line do not cross -
              Police line do not cross - Police line do not cross - Police line
              do not cross -
            </span>
          </div>
          <div>
            <span>
              Police line do not cross - Police line do not cross - Police line
              do not cross - Police line do not cross - Police line do not cross
              - Police line do not cross - Police line do not cross - Police
              line do not cross - Police line do not cross - Police line do not
              cross - Police line do not cross - Police line do not cross -
              Police line do not cross - Police line do not cross - Police line
              do not cross -
            </span>
          </div>
        </div>

        <div className={styles.scroll} style={{ "--d": -25, "--y": 750 }}>
          <div>
            <span>
              Police line do not cross - Police line do not cross - Police line
              do not cross - Police line do not cross - Police line do not cross
              - Police line do not cross - Police line do not cross - Police
              line do not cross - Police line do not cross - Police line do not
              cross - Police line do not cross - Police line do not cross -
              Police line do not cross - Police line do not cross - Police line
              do not cross -
            </span>
          </div>
          <div>
            <span>
              Police line do not cross - Police line do not cross - Police line
              do not cross - Police line do not cross - Police line do not cross
              - Police line do not cross - Police line do not cross - Police
              line do not cross - Police line do not cross - Police line do not
              cross - Police line do not cross - Police line do not cross -
              Police line do not cross - Police line do not cross - Police line
              do not cross -
            </span>
          </div>
        </div>

        <div className={styles.scroll} style={{ "--d": 15, "--y": 700 }}>
          <div>
            <span>
              Police line do not cross - Police line do not cross - Police line
              do not cross - Police line do not cross - Police line do not cross
              - Police line do not cross - Police line do not cross - Police
              line do not cross - Police line do not cross - Police line do not
              cross - Police line do not cross - Police line do not cross -
              Police line do not cross - Police line do not cross - Police line
              do not cross -
            </span>
          </div>
          <div>
            <span>
              Police line do not cross - Police line do not cross - Police line
              do not cross - Police line do not cross - Police line do not cross
              - Police line do not cross - Police line do not cross - Police
              line do not cross - Police line do not cross - Police line do not
              cross - Police line do not cross - Police line do not cross -
              Police line do not cross - Police line do not cross - Police line
              do not cross -
            </span>
          </div>
        </div>
        <div className={styles.scroll} style={{ "--d": -5, "--y": 150 }}>
          <div>
            <span>
              Police line do not cross - Police line do not cross - Police line
              do not cross - Police line do not cross - Police line do not cross
              - Police line do not cross - Police line do not cross - Police
              line do not cross - Police line do not cross - Police line do not
              cross - Police line do not cross - Police line do not cross -
              Police line do not cross - Police line do not cross - Police line
              do not cross -
            </span>
          </div>
          <div>
            <span>
              Police line do not cross - Police line do not cross - Police line
              do not cross - Police line do not cross - Police line do not cross
              - Police line do not cross - Police line do not cross - Police
              line do not cross - Police line do not cross - Police line do not
              cross - Police line do not cross - Police line do not cross -
              Police line do not cross - Police line do not cross - Police line
              do not cross -
            </span>
          </div>
        </div>
        <div className={styles.scroll} style={{ "--d": -15, "--y": -350 }}>
          <div>
            <span>
              Police line do not cross - Police line do not cross - Police line
              do not cross - Police line do not cross - Police line do not cross
              - Police line do not cross - Police line do not cross - Police
              line do not cross - Police line do not cross - Police line do not
              cross - Police line do not cross - Police line do not cross -
              Police line do not cross - Police line do not cross - Police line
              do not cross -
            </span>
          </div>
          <div>
            <span>
              Police line do not cross - Police line do not cross - Police line
              do not cross - Police line do not cross - Police line do not cross
              - Police line do not cross - Police line do not cross - Police
              line do not cross - Police line do not cross - Police line do not
              cross - Police line do not cross - Police line do not cross -
              Police line do not cross - Police line do not cross - Police line
              do not cross -
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default UnderConstructionPage;
