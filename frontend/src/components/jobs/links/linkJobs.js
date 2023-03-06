import React, { useState, useEffect } from "react";
import { apiWrapper } from "../../../utils/apiWrapper";
import styles from "../list/listJobs.module.css";
import ItemJob from "../list/item/itemJob";

const LinkJobs = (props) => {
  const [jobs, setJobs] = useState([]);
  const [reload, setReload] = useState(false);

 const reloadPage = () => {
    setReload(!reload);
  };

  useEffect(() => {
    apiWrapper("job", "GET").then((res) => {
      const resAux = res.filter((element) => element.user.includes(props.userId));

      setJobs(resAux);
    });
  }, [reload]);

  return (
    <>
      <div className={styles.container}>
        {jobs &&
          jobs.map((e, index) => (
            <ItemJob
              key={e._id}
              element={e}
              index={index+1}
              userId={props.userId}
              reloadPage={reloadPage}
            />
          ))}
      </div>
    </>
  );
};

export default LinkJobs;
