import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import AppliedJob from "../AppliedJob/AppliedJob";

export default function AppliedJobs() {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJob = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote",
      );
      setDisplayJobs(remoteJob);
    } else if (filter === "onsite") {
      const onsiteJob = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite",
      );
      setDisplayJobs(onsiteJob);
    }
  };

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
    setDisplayJobs(jobsApplied);
  }, [jobs]);

  return (
    <div className="my-2 p-2 flex flex-col gap-12">
      <div className="filter flex flex-row justify-end mr-2">
        <div className="relative inline-block group">
          <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium text-gray-700">
            Filter By
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown */}
          <div className="absolute hidden group-hover:block mt-2 w-40 bg-white border rounded-lg shadow-md">
            <ul className="text-sm text-gray-700">
              <li
                onClick={() => handleJobsFilter("all")}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                All
              </li>
              <li
                onClick={() => handleJobsFilter("remote")}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Remote
              </li>
              <li
                onClick={() => handleJobsFilter("onsite")}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Onsite
              </li>
            </ul>
          </div>
        </div>
      </div>
      {displayJobs.map((job) => (
        <AppliedJob job={job}></AppliedJob>
      ))}
    </div>
  );
}
