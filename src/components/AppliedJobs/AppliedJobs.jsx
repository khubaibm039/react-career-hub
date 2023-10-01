import { useLoaderData } from "react-router-dom";

const AppliedJobs = () => {

    const jobs = useLoaderData()

    return (
        <div>
            <h2>I applied for the jobs</h2>
        </div>
    );
};

export default AppliedJobs;