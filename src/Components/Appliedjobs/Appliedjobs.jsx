import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import AppliedJob from "../AppliedJob/AppliedJob";

export default function AppliedJobs() {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const storedJobsIds = getStoredJobApplication();

    //  Method 1
    // if (jobs.length > 0) {
    //   const jobsApplied = jobs.filter((job) => storedJobsIds.includes(job.id));
    //   console.log(jobsApplied);
    // }

    // Method 2
    const jobsApplied = [];
    for (const id of storedJobsIds) {
      const job = jobs.find((job) => job.id === id);
      if (job) {
        jobsApplied.push(job);
      }
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAppliedJobs(jobsApplied);
  }, [jobs]);

  return (
    <div className="my-2 p-2 flex flex-col gap-12">
      {appliedJobs.map((appliedJob) => (
        <AppliedJob appliedJob={appliedJob}></AppliedJob>
      ))}
    </div>
  );
}
