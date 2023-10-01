const getStoredJobApplications = () => {
    const storedJobApplications = localStorage.getItem('job-Applications');
    if (storedJobApplications) {
        return JSON.parse(storedJobApplications)
    }
    else {
        return []
    }
}


const saveJobApplication = id => {
    const storedJobApplications = getStoredJobApplications();
    const exists = storedJobApplications.find(jobId => jobId === id)
    if (!exists) {
        storedJobApplications.push(id)
        localStorage.setItem('job-Applications', JSON.stringify(storedJobApplications))
    }
}

export { getStoredJobApplications, saveJobApplication }