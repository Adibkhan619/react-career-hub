import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    // console.log(job, id);

    const handleApplyNow = () => {
        saveJobApplication(idInt);

        toast('You have applied successfully')
    }

    return (
        <div className="grid grid-cols-4">
            <div className="col-span-3">
                <p>
                    <span className="font-bold">Job Description:</span> {job.job_description}
                </p>
               <p>
                <span className="font-bold"> Job Responsibility: </span>{job.job_responsibility}</p>              
               <p>
                <span className="font-bold"> Educational Requirements: </span>{job.educational_requirements}</p> 
                <p><span className="font-bold">Experience:</span>{job.experiences}</p>             
            </div>
            <div className="bg-slate-700 p-5 space-y-3">
                <h1 className="font-bold">Job Details</h1>
                <hr />
                <p>Salary: {job.salary} (Per-month)</p>
                <p>Job Title: {job.job_title}</p>
                <h1 className="font-bold">Contact Information</h1>
                <hr />
                <p>Phone: {job.contact_information.phone}</p>
                <p>Email: {job.contact_information.email}</p>
                <p>Address: {job.contact_information.address}</p>
                <button onClick={handleApplyNow} className="btn">Apply Now</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;