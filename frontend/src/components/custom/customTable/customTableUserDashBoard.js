import React from "react";
import styles from "./customTableUserDashBoard.module.css";

const CustomTableUserDashBoard = (props) => {
  return (
    <div className={styles.fondo}>
      <table className={styles.styled_table}>
        <tbody>
          <tr>
            <td>
              <div className={styles.avatar}>
                <img src="/img/avatar/AvatarMaker M 2.png" alt="avatar"></img>
              </div>
            </td>
            <td>
              <div>
                <div>{new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()}</div>
                <div>
                  {new Array(12)
                    .fill()
                    .map(() => String.fromCharCode(Math.random() * 86 + 40))
                    .join("")}
                </div>
                <div>algo@quiensabe.com</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.avatar}>
                <img src="/img/avatar/AvatarMaker H 3.png" alt="avatar"></img>
              </div>
            </td>
            <td>
              <div>
                <div>
                  {new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()}
                </div>
                <div>
                {new Array(12)
                  .fill()
                  .map(() => String.fromCharCode(Math.random() * 86 + 40))
                  .join("")}
                </div>
                <div>algo@quiensabe.com</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.avatar}>
                <img src="/img/avatar/AvatarMaker H 4.png" alt="avatar"></img>
              </div>
            </td>
            <td>
              <div>
                <div>
                  {new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()}
                </div>
                <div>
                {new Array(12)
                  .fill()
                  .map(() => String.fromCharCode(Math.random() * 86 + 40))
                  .join("")}
                </div>
                <div>algo@quiensabe.com</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.avatar}>
                <img src="/img/avatar/AvatarMaker M 4.png" alt="avatar"></img>
              </div>
            </td>
            <td>
              <div>
                <div>
                  {new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()}
                </div>
                <div>
                {new Array(12)
                  .fill()
                  .map(() => String.fromCharCode(Math.random() * 86 + 40))
                  .join("")}
                </div>
                <div>algo@quiensabe.com</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.avatar}>
                <img src="/img/avatar/AvatarMaker M 5.png" alt="avatar"></img>
              </div>
            </td>
            <td>
              <div>
                <div>
                  {new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()}
                </div>
                <div>
                {new Array(12)
                  .fill()
                  .map(() => String.fromCharCode(Math.random() * 86 + 40))
                  .join("")}
                </div>
                <div>algo@quiensabe.com</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomTableUserDashBoard;
