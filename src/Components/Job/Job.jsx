import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;


  return (
    <div className="border border-gray-400 p-10 rounded-2xl space-y-3">
      <img src={logo} alt="" />
      <h2 className="font-bold">{job_title}</h2>
      <p>{company_name}</p>
      <div className="flex gap-5">
        <h2 className="border border-primary px-4 py-2 text-violet-500 rounded-lg">
          {remote_or_onsite}
        </h2>
        <h2 className="border border-primary px-4 py-2 text-violet-500 rounded-lg">{job_type}</h2>
      </div>
      <div className="flex gap-5">
        <p className="text-xl flex gap-2 items-center">
          <IoLocationOutline /> {location}
        </p>
        <p className="text-xl flex gap-2 items-center">
          <AiOutlineDollarCircle />
          {salary}
        </p>
      </div>
      <Link to={`/job/${id}`}>
        <button className="btn-primary btn">View Details</button>
      </Link>
        
    </div>
  );
};

Job.propTypes ={ 
    job: PropTypes.array
}

export default Job;
