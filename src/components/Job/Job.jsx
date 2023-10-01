import PropTypes from 'prop-types';
import { MdLocationOn } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';
const Job = ({ job }) => {

    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary, id } = job;

    return (
        <div>
            <div className="card card-compact  bg-base-200">
                <figure><img src={logo} alt="logo" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}?</p>
                    <div className='flex gap-4'>
                        <button className='btn btn-outline  text-[#7E90FE] hover:bg-[#7E90FE]'>{remote_or_onsite}</button>
                        <button className='btn btn-outline  text-[#7E90FE] hover:bg-[#7E90FE]'>{job_type}</button>
                    </div>
                    <div className='flex gap-6'>
                        <h2 className="flex gap-2 items-center"><BiDollarCircle className='text-2xl'></BiDollarCircle>Salary: {salary}</h2>
                        <h2 className='flex gap-2 items-center'><MdLocationOn className='text-2xl'></MdLocationOn>{location}</h2>
                    </div>
                    <div className="card-actions ">
                        <Link to={`/job/${id}`}>
                            <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-bold text-xl">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

Job.propTypes =
{
    job: PropTypes.object.isRequired
}

export default Job;