import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';

const Jobsmap = () => {
    const [job, setJob] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:3001/job');
            const data = await response.json();
            setJob(data);
        }
        fetchData();
    }, [refresh]);

    return (
        <div className='jobmap'>
            {job.map(job => (
                <JobCard key={job._id} {...job} />
            ))}
        </div>
    )
}

export default Jobsmap;