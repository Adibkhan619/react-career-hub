import { useEffect, useState } from "react";
import Job from "../Job/Job";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    },[])

    const [jobLength, setJobLength] = useState(4);

    return (
        <div>
            <div className="text-center space-y-5 my-10">
                <h1 className="text-5xl font-semibold">Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-5">
                {
                 jobs.slice(0,jobLength).map(job => <Job job={job} key={job.id}></Job>)
                }
               
            </div>
            <div className={jobs.length === jobLength && 'hidden'}>
                <button onClick={() => setJobLength(jobs.length)} className="btn btn-primary flex my-10 mx-auto">Show All </button>
            </div>
            
        </div>
        
    );
};

export default Jobs;