import PropTypes from 'prop-types'

const AvailableJob = ({job}) => {
    const {logo, category_name, availability} = job;
    return (
        <div className="border-dotted border bg-gray-800 border-gray-400 rounded-lg p-5 ">
            <img src={logo} alt="" />
            <h1>{category_name}</h1>
            <p>{availability}</p>
        </div>
    );
};

AvailableJob.propTypes ={
    job: PropTypes.object
}

export default AvailableJob;