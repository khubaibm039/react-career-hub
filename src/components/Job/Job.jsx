import PropTypes from 'prop-types';

const Job = ({ job }) => {

    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

    return (
        <div>
            <div className="card card-compact  bg-base-200">
                <figure><img src={logo} alt="logo" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}?</p>
                    <div className='flex gap-4'>
                        <button className='btn btn-outline btn-secondary'>{remote_or_onsite}</button>
                        <button className='btn btn-outline btn-secondary'>{job_type}</button>
                    </div>
                    <div className="card-actions ">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Job.propTypes =
{
    job: PropTypes.object.isRequired
}

export default Job;