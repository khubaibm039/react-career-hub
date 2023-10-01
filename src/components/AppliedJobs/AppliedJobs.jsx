import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredJobApplications } from "../../utility/localStorage";
import { MdLocationOn } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    useEffect(() => {
        const storedJobIds = getStoredJobApplications();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            setAppliedJobs(jobsApplied)
        }
    }, [])

    return (
        <div>
            <h2>I applied : {appliedJobs.length}</h2>
            <details className="dropdown mb-32">
                <summary className="m-1 btn">Filter By</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 ">
                    <li><a>All</a></li>
                    <li><a>Remote</a></li>
                    <li><a>Onsite</a></li>
                </ul>
            </details>
            <div>
                {
                    appliedJobs.map((job) => <div key={job.id}>
                        <div className="grid grid-cols-4 border my-8 p-8">
                            <div className="w-60 h-60 flex justify-center items-center bg-gray-100  rounded-lg">
                                <img className="h-12" src={job.logo} alt="" />
                            </div>
                            <div className="col-span-2 grid items-center">
                                <h3 className="font-bold text-xl">{job.job_title}</h3>
                                <h3 className="text-xl">{job.company_name}</h3>
                                <div className='flex gap-4'>
                                    <button className='btn btn-outline  text-[#7E90FE] hover:bg-[#7E90FE]'>{job.remote_or_onsite}</button>
                                    <button className='btn btn-outline  text-[#7E90FE] hover:bg-[#7E90FE]'>{job.job_type}</button>
                                </div>
                                <div className='flex gap-6'>
                                    <h2 className="flex gap-2 items-center"><BiDollarCircle className='text-2xl'></BiDollarCircle>Salary: {job.salary}</h2>
                                    <h2 className='flex gap-2 items-center'><MdLocationOn className='text-2xl'></MdLocationOn>{job.location}</h2>
                                </div>
                            </div>
                            <Link className="flex justify-end  items-center"> <button className="btn btn-primary">View Details</button></Link>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;