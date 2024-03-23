import { useEffect, useState } from "react";
import AvailableJob from "../AvailableJob/AvailableJob";

const Categories = () => {

    const [availableJobs, setAvailableJobs] = useState([]);

    useEffect(()=> {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setAvailableJobs(data))}
    ,[])

  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl">Job Category List</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {
            availableJobs.map(job => <AvailableJob job={job} key={job.id}></AvailableJob>)
        }
      </div>
    </div>
  );
};

export default Categories;