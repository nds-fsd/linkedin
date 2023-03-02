import React, { useState, useEffect } from "react";
import { apiWrapper } from "../../../utils/apiWrapper";
import styles from "./listJobs.module.css";
import ItemJob from "./item/itemJob";


const ListJobs = (props) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {

    apiWrapper("job", "GET").then((res) => {
      setJobs(res);
    });

  }, []);

  return (
    <>
      <div className={styles.container}>
        {jobs &&
          jobs.map((e, index) => (
            <ItemJob
              key={e._id}
              element={e}
              index={index}
            />
          ))}
      </div>
    </>
  );
};

export default ListJobs;
