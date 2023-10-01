import { Link, useLoaderData, useParams } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";
import { AiTwotoneCreditCard } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const job = jobs.find(job => job.id == id);
    // console.log(job);
    const { job_description, job_responsibility, educational_requirements, experiences, job_title, salary, contact_information } = job;
    const { phone, email, address } = contact_information;

    const handleApplyJob = () => {
        saveJobApplication(id)
        toast('you have applied successfully')
    }

    return (
        <div>
            <h2 className="my-36 text-3xl text-center">job Details : {id}</h2>
            <div className="grid gap-4 md:grid-cols-3 my-32">
                <div className=" md:col-span-2">
                    <p><span className="font-bold">Job Description : </span>{job_description} </p>
                    <p className="my-6"><span className="font-bold">Job Responsibility : </span>{job_responsibility} </p>
                    <div>
                        <p className="font-bold">Educational Requirement :</p>
                        <p className=" my-6">{educational_requirements}</p>
                    </div>
                    <div>
                        <p className="font-bold">Experiences :</p>
                        <p className=" my-6">{experiences}</p>
                    </div>
                </div>
                <div>
                    <div className=" bg-blue-50 mb-6 p-8 rounded-lg">
                        <h3 className="font-bold py-8">Job Details</h3>
                        <p className="border"></p>
                        <p className="mt-6 flex items-center"><BiDollarCircle className="text-2xl mr-2"></BiDollarCircle> <span className="font-bold">Salary: </span> {salary} (Per Month)</p>
                        <p className="mt-6 pb-8 flex items-center"><AiTwotoneCreditCard className="text-2xl mr-2"></AiTwotoneCreditCard> <span className="font-bold">JobTitle: </span> {job_title} </p>
                        <h3 className="font-bold mb-6">Contact Information</h3>
                        <p className="border"></p>
                        <div>
                            <p className="mt-6 pb-8 flex items-center "><AiOutlinePhone className="text-2xl mr-2"></AiOutlinePhone> <span className="font-bold">Phone: </span> {phone} </p>
                            <p className="mt-6 pb-8 flex"><AiOutlineMail className="text-2xl mr-2"></AiOutlineMail> <span className="font-bold">Email: </span> {email} </p>
                            <p className="mt-6  flex  "><MdLocationOn className="text-3xl mr-2"></MdLocationOn> <span className="font-bold">Address: </span> {address} </p>
                        </div>
                    </div>
                    <Link className="flex justify-end"> <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button></Link>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default JobDetails;