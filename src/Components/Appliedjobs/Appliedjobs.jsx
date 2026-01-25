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
    <div className="flex flex-col gap-12 p-2 my-2">
      <div className="flex flex-row justify-end mr-2 filter">
        <div className="relative inline-block group">
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg">
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
          <div className="absolute hidden w-40 mt-2 bg-white border rounded-lg shadow-md group-hover:block">
            <ul className="text-sm text-gray-700">
              <li>
                <button
                  onClick={() => handleJobsFilter("all")}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  All
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleJobsFilter("remote")}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  Remote
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleJobsFilter("onsite")}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  Onsite
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {displayJobs.map((job) => (
        <AppliedJob key={job.id} job={job}></AppliedJob>
      ))}
    </div>
  );
}
