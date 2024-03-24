import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/localStorage";
import AppliedJob from "../AppliedJob/AppliedJob";


const AppliedJobs = () => {

    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect( () =>{
        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0){
            const jobsApplied = [];
            for(const id of storedJobIds){
                const job = jobs.find(job => job.id === id);
                if(job){
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
            console.log(jobsApplied);
        }
    }, [])
    return (
        <div>
            <div className="flex flex-col gap-5">
                 {
                appliedJobs.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>
                )
            }
            </div>
           
        </div>
    );
};

export default AppliedJobs;