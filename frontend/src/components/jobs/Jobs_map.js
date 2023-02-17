import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import "./Jobs_map.css"
import { apiWrapper } from '../../utils/apiWrapper';

// const [job, setJob] = useState([]);
// const [refresh, setRefresh] = useState(false);

// const memoizedJob = useMemo(() => {
//     async function fetchData() {
//         const response = await fetch('http://localhost:3001/job');
//         const data = await response.json();
//         return data;
//     }
//     return fetchData();
// }, [refresh]);

// useEffect(() => {
//     setJob(memoizedJob);
// }, [memoizedJob]);
const Jobsmap = () => {
    const [job, setJob] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        async function fetchData() {
          const data = await apiWrapper('job', 'GET');
          setJob(data);
        }
        fetchData();
      }, [refresh]);

    return (
        <>
         
        <div className='jobmap'>
        <div className="header__post">
            <div className="jobmap_title">
            <img src="./img/vector.png" alt="ops" />
            <h2> New Job Offers:</h2>
            </div>
                <button onClick={() => setRefresh(true)}>Refresh all Jobs</button>
            </div> 
            {job.map(job => (
                <JobCard key={job._id} {...job} />
            ))}
        </div>
        </>
    )
}

export default Jobsmap;