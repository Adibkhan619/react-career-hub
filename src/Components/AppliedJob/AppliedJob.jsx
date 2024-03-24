import PropTypes from 'prop-types'
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";

const AppliedJob = ({job}) => {

    const {id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;

    return (
        
            <div className='bg-white p-8 rounded-lg flex justify-between items-center text-gray-500'>
            <div className='flex gap-8'>
               <img className='p-16 bg-slate-100 rounded-lg w-[240px]' src={logo} alt="" />
           <div className='space-y-4'>
                <h1 className='text-2xl font-bold text-gray-700'>{job_title}</h1>
                <p className='text-xl font-semibold'>{company_name}</p>
                <div className="flex gap-5">
        <h2 className="border border-primary font-semibold px-4 py-2 text-violet-500 rounded-lg">
          {remote_or_onsite}
        </h2>
        <h2 className="border border-primary font-semibold px-4 py-2 text-violet-500 rounded-lg">{job_type}</h2>
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
           </div> 
            </div>           
           <button className="btn-primary btn">View Details</button>
        </div>
        
        
    );
};

AppliedJob.propTypes ={ 
    job: PropTypes.array
}

export default AppliedJob;